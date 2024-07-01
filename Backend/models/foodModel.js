import mongoose from "mongoose";


//creating the schema where i will decscript the food model properties
const foodSchema = new mongoose.Schema({
    name: {type:String,require:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,require:true},
    category:{type:String,required:true}
})

//using this schema i will make the model
//const foodModel =mongoose.model("food",foodSchema)   // we create this model once, but when we refresh it will create it again
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema) // if model already there || if newly created model

export default foodModel;
