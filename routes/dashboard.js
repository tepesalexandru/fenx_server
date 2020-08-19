const express = require('express');
const User = require('../models/User');
const ListItem = require('../models/ListItem');
const router = express.Router();
const mongoose = require("mongoose");

router.get("/:userId", async (req, res) => {
    console.log(req.params.userId);
    try {
        const findUser = await User.findOne({
            userId: req.params.userId
        });
        res.json(findUser.dashboard);
    } catch (err) {
        console.log(err);
    }
});

router.post("/:userId", async (req, res) => {
    console.log(req.body);
    const newListItem = new ListItem({
        label: req.body.label,
        amount: req.body.amount
    });
    try {
        if (req.body.listType === "ASSETS") {
            await User.updateOne(
                {userId: req.params.userId}, {
                $push: {
                    "dashboard.assets": newListItem
                }
            });
            res.json(newListItem);
        } else {
            await User.updateOne(
                {userId: req.params.userId}, {
                $push: {
                    "dashboard.liabilities": newListItem
                }
            });
            res.json(newListItem);
        }
    } catch (err) {
        res.json(err);
    }
});

router.delete("/:userId/:postId/:directory", async (req, res) => {
    try {
        console.log(req.params);
        if (req.params.directory === "ASSETS") {
            const findUser = await User.updateOne({
                userId: req.params.userId,
                $pull: {
                    "dashboard.assets": {
                        _id: mongoose.Types.ObjectId(req.params.postId)
                    }
                }
            });
        } else {
            const findUser = await User.updateOne({
                userId: req.params.userId,
                $pull: {
                    "dashboard.liabilities": {
                        _id: mongoose.Types.ObjectId(req.params.postId)
                    }
                }
            });
        }
        
        res.json("post deleted");
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;