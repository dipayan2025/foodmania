const mongoose = require('mongoose');

const mongo_url = 'mongodb+srv://dipayan:1234@cluster0.ozz09qs.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongo_db = async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log("MongoDB connected successfully!");
        
        const db = mongoose.connection.db;

        // Fetch data from 'food_Items'
        const foodItemsCollection = db.collection("food_Items");
        const foodItems = await foodItemsCollection.find({}).toArray();
        global.food_items = foodItems;
        //console.log("Food Items:", global.food_items);

        // Optional: Fetch data from 'food_category'
        const foodCategoryCollection = db.collection("food_Category");
        const foodCategories = await foodCategoryCollection.find({}).toArray();
        global.food_categories = foodCategories;
        //console.log("Food Categories:", global.food_categories);

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = mongo_db;
