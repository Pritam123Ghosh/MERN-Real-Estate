import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRf-DqKr-z7qDHe0IOBDypqLB9hF0QHF5azH59HJTxZg&s"
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;