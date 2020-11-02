const path = require('path');
const express = require('express');
const morgan = require('morgan');
const socketio = require('socket.io');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const http = require('http');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

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
  socket.emit('SERVER_MESSAGE', {
    text: 'Welcome to chat',
    time: Date.now(),
  });

  // Listen for chat message
  socket.on('CLIENT_MESSAGE', (message) => {
    io.emit('SERVER_MESSAGE', {
      text: message.text,
      time: message.time,
      userName: message.userName,
    });
  });
});
