import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('conneceted', () => console.log('Database connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;