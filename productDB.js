require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");

const productJSON = require("./products.json");

const start = async () => {
  try {
    connectDB(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.create(productJSON);
    console.log("Creation Successfull");
  } catch (error) {
    console.log(error);
  }
};

start();
