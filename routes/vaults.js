const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Vault = require('../models/Vault');
const mongoose = require('mongoose');

router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findOne({
            userId: req.params.userId
        });
        console.log(user.vaults)
        res.json(user.vaults);
    } catch (err) {
        console.log(err);
    }
    
});

router.post("/:userId", async (req, res) => {
    const vault = new Vault({
        label: req.body.label,
        totalAmount: req.body.totalAmount,
        imageURL: req.body.imageURL
    });
    try {
        await User.updateOne({
            userId: req.params.userId,
            
                $push: {
                    vaults: vault
                }
        });
        res.json("Vault added");
        console.log("Vault added!")
    } catch(err) {
        console.log(err);
    }
})

router.patch("/favorite/:userId/:vaultId", async (req, res) => {
    try {
        await User.findOneAndUpdate({
            userId: req.params.userId,
            "vaults._id": mongoose.Types.ObjectId(req.params.vaultId)
        }, {
            $set: {
                "vaults.$.favorite": req.body.setFavoriteValue
            }
        })
        res.json("Vault updated");
    } catch (err) {
        console.log(err);
    }
});

router.delete("/:userId/:vaultId", async (req, res) => {
    try {
        await User.updateOne({
            userId: req.params.userId,
            $pull: {
                "vaults": 
                {_id: mongoose.Types.ObjectId(req.params.vaultId)}
            }
        })
        res.json("Vault deleted");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;