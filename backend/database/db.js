import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err))
}

// const mongoose = require('mongoose');
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';

// mongoose.connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
