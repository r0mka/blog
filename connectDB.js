const mongoose = require('mongoose');

const connectionString = process.env.MONGO_CONNECTION_STRING;

// const connectionString =
//   'mongodb+srv://roman:4mVpptHF3xA0fRGg@cluster0.5yfea.mongodb.net/dataBase?retryWrites=true&w=majority';

const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  autoIndex: false,
  useFindAndModify: false,
};

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, options);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
