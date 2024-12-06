import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username = String,
    }
    
)

export const user = mongoose.model("User", userSchema) 

