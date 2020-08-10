const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.get("/:userId", async (req, res) => {
    try {
        const findUser = await User.findOne({
            username: req.params.userId
        });
        res.json(findUser);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
})

router.post("/new", async (req, res) => {
    // Create a new user Object
    const user = new User({
        username: req.body.username,
        userId: req.body.userId,
        dashboard: {
            income: 0,
            expenses: 0,
            assets: [],
            liabilities: []
        }
    });
    try {
        // Search if the user already exists in the database
        const findUser = await User.findOne({
            userId: req.body.userId
        });
        if (!findUser) {
            const savedUser = await user.save();
            res.json(savedUser);
        } else {
            res.json("User already exists");
        }
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;