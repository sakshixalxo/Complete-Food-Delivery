import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}//manage user cart
},{minimize:false})//so that cart data will be created without data thats why minimize: false

const userModel =mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;