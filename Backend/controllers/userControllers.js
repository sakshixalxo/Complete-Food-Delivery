import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bycrypt from "bcrypt"
import validator from  "validator"


// login user
const loginUser = async(req,res) =>{
    const {email,password} =req.body;
    try{
      //check if the login user is available or not
      const user =await userModel.findOne({email})   // user acc will be stored in this variable

      //check we got user or not
      if(!user){
         return res.json({success:false,message:"User Doesn't exist"})
      }

      const isMatch = await bycrypt.compare(password,user.password);

      if(!isMatch){
        return res.json({success:false,message:"Inavalid Credentials"})
      }

      //if password matched ceating a token
      const token = createToken(user._id);
      res.json({success:true,token})

    }catch(error){
       console.log(error);
       res.json({success:false,message:"Error"})
    }

}

//create token
const createToken = (id) =>{               //user id that will be self generated by mongoDB
    return jwt.sign({id},process.env.JWT_SECRET)
} 

//Register user
const registerUser = async(req,res) =>{
    //destructure name,email password
    const {name,password,email} =req.body;
    try{
        // to check if user already exist or not
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User already exits "})
        }
        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email "})
        }

        //checking length of passsword  ( should be 8 digits atleast)
        if(password.length<8){
            return res.json({success:false,message:"Please enetr  a strong password"})
        }

        //email valid (checked)
        //hasing user password
        const salt = await bycrypt.genSalt(10) // more higher no -> more higher secuirty(range:5- 15) 15 will take time 
        const hashedPassword = await bycrypt.hash(password,salt);
        // now password has been hashed

        // creating new user
        const  newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        }) 
 

        // saving the user in the data base
        const user = await newUser.save()
        //create one token and sent token using response to the user
        const token = createToken(user._id)
        //sending this token as response
        res.json({success:true,token})
    }catch(erorr){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}