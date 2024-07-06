import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // adding .js as it will not be added by default
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'     // .env will be included in my project
import cartRouter from "./routes/cartRoute.js";


// app config
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB(); 

//API endpoints
//for foodRoutes
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter)

app.get("/", (req, res) => {
    res.send("API working");
});


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
});


//mongodb+srv://sakshixalxo:Sakshiaru@cluster0.tkxdop7.mongodb.net/?
