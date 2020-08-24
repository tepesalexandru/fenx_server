const express = require('express');
const router = express.Router();

const userController = require("../controllers/users");

router.get("/:userId", userController.byId);
router.post("/new", userController.create);

module.exports = router;