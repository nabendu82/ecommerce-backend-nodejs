const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/products");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(8800, () => console.log('Server started on port 8800'));