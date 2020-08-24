
const Transaction = require("../../models/Transaction");
const TransactionHistory = require("../../models/VaultTransactions");

const transactionsController = {
   
    async all (req, res) {
       
        const transactions = await TransactionHistory.findOne({
            vaultId: req.params.vaultId
        });
        res.json(transactions.transactions);
    },
    async create (req, res) {
        console.log("hi")
        const newTransaction = new Transaction({
            amount: req.body.amount,
            type: req.body.type,
            username: req.body.username,
            imageURL: req.body.imageURL
        });
        const findVault = await TransactionHistory.updateOne({
            vaultId: req.params.vaultId
        }, {
            $push: {
                "transactions": newTransaction
            }
        });
        console.log("transaction created!");
        res.json(newTransaction);
    }
}

module.exports = transactionsController;