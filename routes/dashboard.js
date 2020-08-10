const express = require('express');
const User = require('../models/User');
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

module.exports = router;