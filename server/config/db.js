const mongoose = require('mongoose');

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectDB;
