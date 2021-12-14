import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
})
const User =  mongoose.model('User', userSchema)
export {User}