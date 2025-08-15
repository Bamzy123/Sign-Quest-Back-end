import mongoose from 'mongoose';

export const connectDB = async () => {

  const mongoURL = process.env.MONGO_URI;

  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected...'))
  } catch (err) {
    console.log('MongoDB connection error: ', err)
      process.exit(1);
  }
}