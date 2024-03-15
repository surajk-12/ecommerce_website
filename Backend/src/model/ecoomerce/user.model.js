import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    username:{
        type: String,
        requied: true,
        unique: true,
        lowercase: true
    },
    email:{
        type: String,
        requied: true,
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        requied: ture
    },
}, 
{timestamps:true})

export const user = mongoose.model("user", userSchema)