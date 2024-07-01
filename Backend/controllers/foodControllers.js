// Importing foodModel and fs (if needed) - adjust paths as necessary
import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Controller function to add a new food item in the database
const addFood = async (req, res) => {
    if (!req.file || !req.file.filename) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    let image_filename = req.file.filename; // Storing the uploaded file name

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save(); // Saving the new item to the database
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

// Function to display all the food items in the database
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({}); // Get all the data of the food items
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

// Function to remove a food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id); // Find item to be deleted 
        if (food) {
            fs.unlink(`uploads/${food.image}`, (err) => {
                if (err) {
                    console.log(err);
                }
            });

            // Delete its data
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({ success: true, message: "Food Removed" });
        } else {
            res.status(404).json({ success: false, message: "Food item not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

export { addFood, listFood, removeFood };
