const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Vault = require('../models/Vault');
const { json } = require('express');

router.post("/:userId", async (req, res) => {
    const vault = new Vault({
        label: req.body.label,
        totalAmount: req.body.totalAmount,
    });
    try {
        vault.save().then(vault => {
            User.findOneAndUpdate({
                _id: req.params.userId,
            }, {
                $push: {
                    vaults: vault._id
                }
            }).populate('vaultList');
        });

    } catch(err) {
        console.log(err);
    }
})

module.exports = router;