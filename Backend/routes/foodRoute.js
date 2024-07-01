import express from "express"
import { addFood,listFood,removeFood} from "../controllers/foodControllers.js"   // add .js
import multer from "multer" // using this i will create a image storing system

//creating express router
const foodRouter = express.Router(); // using this router i can create the get , post ... methode

//Image storage Engine

const storage= multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb) =>{
       return cb(null,`${Date.now()}${file.originalname}`) //whenever we upload a file, timestamp will be added in orginal name to make it unique // stored in uplods folder
    }
})

const upload = multer({storage:storage}) //middleware// we can store image in upload folder // using diskStorage

 //we use post methode to send the data in the server,and on the server our data will be processed and then we get response
// eg: when we fill fill a form ,that form data will be send using post methode
foodRouter.post("/add",upload.single("image"),addFood) //to add the  above middleware to route
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);






export default foodRouter;