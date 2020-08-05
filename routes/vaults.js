const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Vault = require('../models/Vault');

router.get("/:userId", async (req, res) => {
    const user = await User.findOne({
        username: req.params.userId
    });
    res.json(user.vaults);
})

router.post("/:userId", async (req, res) => {
    const vault = new Vault({
        label: req.body.label,
        totalAmount: req.body.totalAmount,
    });
    try {
        await User.updateOne({
            _id: req.params.userId,
            
                $push: {
                    vaults: vault
                }
        });
        res.json("Vault added");
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;