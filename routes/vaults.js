const express = require('express');
const router = express.Router();
 
const vaultController = require("../controllers/vaults");

router.get("/:userId", vaultController.byId);
router.post("/:userId", vaultController.create);
router.delete("/:userId/:vaultId", vaultController.delete);
router.patch("/favorite/:userId/:vaultId", vaultController.favorite);

module.exports = router;