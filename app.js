require("dotenv").config();
const express = require("express");
const productsRoute = require("./routes/products");
const connectDB = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.use("/api/products", productsRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
