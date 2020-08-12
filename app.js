const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");
const vaultsRoute = require("./routes/vaults");
const usersRoute = require("./routes/users");
const dashboardRoute = require('./routes/dashboard');

const app = express();
app.use(cors());

// Middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


// Routes
app.get("/", (req, res) => {
    res.send("we are on home");
})

app.use("/posts", postsRoute);
app.use("/vaults", vaultsRoute);
app.use("/users", usersRoute);
app.use("/dashboard", dashboardRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db!");
    const PORT = process.env.PORT || 3001;

    app.listen(PORT);
})

