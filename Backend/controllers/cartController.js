import userModel from "../models/userModel.js"

// add to cart, remove to cart,get cart
const addToCart = async (req,res) =>{
  try{
    //we have to find the user data
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId])  // creating new id
    {
        cartData[req.body.itemId] = 1;
    }
    else // if item already present in cart
    {
        cartData[req.body.itemId] += 1;
    }
    //when item added in cart , then we have update the user's cart with this new cart data
    await userModel.findByIdAndUpdate(req.body.userId,{cartData}); // this statement will update the cart dat a in database
    res.json({success:true,message:"Added to Cart"})

  }catch(error){
       console.log(error);
       res.json({success:false, message:"Error"})
  }
}



//remove items from user cart
const removeFromCart = async(req,res) =>{
   try{
    // first we find the users data
      let userData = await userModel.findById(req.body.userId)
      let cartData = await userData.cartData;
      // itemid i want to remove
      if(cartData[req.body.itemId]>0){
           cartData[req.body.itemId] -=1;      // that product id
      }
      //to update the cart data
      await userModel.findByIdAndUpdate(req.body.userId,{cartData});
      res.json({success:true,message:"Removed from cart"})
   }catch(error){
      console.log(error)
      res.json({success:false,message: "Error"})
   }
}


//fetch user cart data
const getCart = async(req,res) =>{
      try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
      } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
      }
}


export {addToCart,removeFromCart,getCart}