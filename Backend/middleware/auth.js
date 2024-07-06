//to decode the token we will use  middleware
import jwt from"jsonwebtoken"


//first we will take the token from user usings the haeders and then we will destructure the token from the req.header
const authMiddleware = async (req,res,next) =>{
        const {token} = req.headers;
        // if we don't get token from user .. we will display this
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        try{
            const token_decode = jwt.verify(token,process.env.JWT_SECRET);
            req.body.userId = token_decode.id;   // using this id we can add, remove and get the dat from the cart
            next(); //callback function
        }catch (error){
            console.log(error);
            res.json({success:false,message:"Error"})
        }

} 

export default authMiddleware;