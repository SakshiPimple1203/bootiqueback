const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log(`Connection String: ${process.env.MONGO_URI}`);
        
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'test', // Explicitly specify the database name
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(`Error: ${err.message}`);
        console.error('Detailed Error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
