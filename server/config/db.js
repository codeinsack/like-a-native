const mongoose = require('mongoose');

const connectDB = async () => {
  const DATABASE_URL = process.env.DATABASE_URL || 'localhost:27017'
  const connect = await mongoose.connect(`mongodb://${DATABASE_URL}/native`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;