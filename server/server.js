require('colors');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// const DATABASE_URL = process.env.DATABASE_URL || 'localhost:27017'
// mongoose.connect(`mongodb://${DATABASE_URL}/native`, { useNewUrlParser: true });

// Route files
const words = require('./routes/words');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/words', words);

app.use(errorHandler);

const PORT = process.env.PORT | 8080;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.red.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
