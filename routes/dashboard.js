const express = require('express');
const User = require('../models/User');
const ListItem = require('../models/ListItem');
const router = express.Router();

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
    const newListItem = new ListItem({
        label: req.body.label,
        amount: req.body.amount
    });
    console.log("request received", req.params.userId);
    try {
        if (req.body.listType === "ASSETS") {
            console.log(req.params.userId);
            await User.updateOne(
                {userId: req.params.userId}, {
                $push: {
                    "dashboard.assets": newListItem
                }
            });
            res.json(newListItem);
        } else {
            await User.updateOne({
                username: req.params.userId,
                $push: {
                    "dashboard.liabilities": newListItem
                }
            })
        }
    } catch (err) {
        res.json(err);
    }
});

router.delete("/:userId/:postId", async (req, res) => {
    try {
        const findUser = await User.updateOne({
            userId: req.params.userId,
            $
        })
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;