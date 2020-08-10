const express = require('express');
const User = require('../models/User');
const ListItem = require('../models/ListItem');
const router = express.Router();

router.get("/:userId", async (req, res) => {
    try {
        const findUser = await User.findOne({
            username: req.params.userId
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
    try {
        if (req.body.listType === "ASSETS") {
            await User.updateOne({
                username: req.params.userId,
                $push: {
                    dashboard: {
                        assets: newListItem
                    }
                }
            });
            res.json("List item added");
        } else {
            await User.updateOne({
                username: req.params.userId,
                $push: {
                    dashboard: {
                        liabilities: newListItem
                    }
                }
            })
        }
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;