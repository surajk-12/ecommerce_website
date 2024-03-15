import mongoose from 'mongoose';
import { category } from './category.model';

const productSchema =new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        defalut:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:category
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:user
    }

},{timestamps:true})

export const product = mongoose.model("product", productSchema)