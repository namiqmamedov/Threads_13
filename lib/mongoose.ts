import mongoose from 'mongoose'

let isConnected  = false; // variable to check if mongoose is connected

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);  //prevent unknown field queries

    if(!process.env.MONGODB_URL) return console.log('MONGO DB not found');
    if(isConnected) return console.log('already connected to mongodb');
    

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnected = true;

        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}