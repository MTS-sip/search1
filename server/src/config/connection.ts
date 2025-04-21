import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/----your_database_name----';

const db = async (): Promise<typeof mongoose.connection> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('The database is connected.');
    return mongoose.connection;
  } catch (error) {
    console.error('Database connection:', error);
    throw new Error(' Failed to connect to database.');
  }
};
