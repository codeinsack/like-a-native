const jwt = require('jsonwebtoken');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const socketio = require('socket.io');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cookieSocketParser = require('socket.io-cookie-parser');
const http = require('http');
const redis = require('redis');
const { Storage } = require('@google-cloud/storage');

const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const User = require('./models/User');

const gc = new Storage({
  keyFilename: path.join(__dirname, 'google-keys.json'),
  projectId: process.env.GOOGLE_PROJECT_ID,
});

exports.bucket = gc.bucket(process.env.GOOGLE_BUCKET_ID);

// Redis Client Setup
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000,
});

// Connect to database
connectDB();

// Route files
const words = require('./routes/words');
const auth = require('./routes/auth');
const attachedWords = require('./routes/attachedWords');

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/words', words);
app.use('/api/v1/auth', auth);
app.use('/api/v1/attachedwords', attachedWords);

app.use(errorHandler);

const PORT = process.env.SERVER_PORT;

const server = http.createServer(app);
server.listen(PORT);

const io = socketio(server);

io.use(cookieSocketParser());

const fetchUser = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return User.findById(decoded.id);
};

// Run when client connects
io.on('connection', async (socket) => {
  const { token } = socket.request.cookies;
  const user = await fetchUser(token);
  redisClient.hset('users', String(user._id), JSON.stringify({
    name: user.name,
    role: user.role,
    avatar: user.avatar,
    email: user.email,
  }));
  io.emit('ADD_USER', user);

  redisClient.hgetall('messages', (err, messages) => {
    socket.emit('RECEIVE_ALL_MESSAGES', messages);
  });
  redisClient.hgetall('users', (err, users) => {
    socket.emit('RECEIVE_ALL_USERS', users);
  });

  socket.emit('RECEIVE_MESSAGE', {
    text: 'Welcome to chat',
    time: Date.now(),
  });

  socket.on('SEND_MESSAGE', (message) => {
    redisClient.hset('messages', message._id, JSON.stringify({
      text: message.text,
      time: message.time,
      userName: message.userName,
    }));
    io.emit('RECEIVE_MESSAGE', {
      text: message.text,
      time: message.time,
      userName: message.userName,
    });
  });

  socket.on('CLEAR_ALL_MESSAGES', () => {
    if (user.role === 'admin') {
      redisClient.del('messages');
      io.emit('RECEIVE_ALL_MESSAGES', []);
    }
  });

  socket.on('disconnect', async () => {
    redisClient.hdel('users', String(user._id));
    io.emit('REMOVE_USER', user._id);
  });
});
