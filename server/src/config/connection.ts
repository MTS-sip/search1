// Purpose: This file establishes a connection to the MongoDB database using Mongoose.
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

export default mongoose.connection;
