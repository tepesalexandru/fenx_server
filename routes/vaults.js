const express = require('express');
const router = express.Router();
 
const vaultController = require("../controllers/vaults");
const transactionsController = require('../controllers/vaults/transactions');
const goalsController = require("../controllers/vaults/goals");

router.get("/transactions/:vaultId", transactionsController.all);
router.get("/goals/:vaultId", goalsController.get);
router.post("/contribute/:vaultId", transactionsController.create);
router.patch("/update/:userId/:vaultId", vaultController.update);
router.patch("/goals/activate/:vaultId", goalsController.activate);

router.get("/:userId", vaultController.byId);
router.get("/:userId/:vaultId", vaultController.vaultById);
router.post("/:userId", vaultController.create);
router.delete("/:userId/:vaultId", vaultController.delete);
router.patch("/favorite/:userId/:vaultId", vaultController.favorite);




module.exports = router;