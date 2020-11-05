const path = require('path');
const express = require('express');
const morgan = require('morgan');
const socketio = require('socket.io');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const http = require('http');
const redis = require('redis');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

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

app.use(errorHandler);

const PORT = process.env.SERVER_PORT;

const server = http.createServer(app);
server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

const io = socketio(server);

// Run when client connects
io.on('connection', (socket) => {
  socket.emit('RECEIVE_MESSAGE', {
    text: 'Welcome to chat',
    time: Date.now(),
  });
  redisClient.hgetall('messages', (err, messages) => {
    io.emit('RECEIVE_ALL_MESSAGES', messages);
  });
  redisClient.hgetall('users', (err, users) => {
    io.emit('RECEIVE_ALL_USERS', users);
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

  socket.on('USER_JOINED', (user) => {
    redisClient.hset('users', user._id, JSON.stringify({
      name: user.name,
      role: user.role,
    }));
    io.emit('ADD_USER', {
      _id: user._id,
      name: user.name,
      role: user.role,
    });
  });
});
