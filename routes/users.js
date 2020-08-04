const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/new", async (req, res) => {
    const user = new User({
        username: req.body.username
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;