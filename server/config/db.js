const mongoose = require('mongoose');

const connectDB = async () => {
  const connect = await mongoose.connect(`mongodb://${process.env.DATABASE_URL}/native`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectDB;
