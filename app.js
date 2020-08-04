const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', "https://fenx.herokuapp.com"]
}));

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("we are on home");
})

app.use("/posts", postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db!");
})

app.listen(3001);