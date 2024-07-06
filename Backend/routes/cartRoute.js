import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

//create rotuer
const cartRouter =express.Router();

//using this router , we will create multiple endd pioint // added auth middleware
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)

export default  cartRouter; 