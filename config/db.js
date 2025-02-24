const mongoose = require('mongoose');

// Connect to MongoDB using the connection string from environment variables
const connectDB = async () => {
  try {
    console.log(`MongoDB connection string: ${process.env.MONGODB_URI}`);
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;