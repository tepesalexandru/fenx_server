const Storage = require("../../models/Vault");
const Vault = require("../../models/VaultDetails");
const Transaction = require("../../models/Transaction");
const TransactionHistory = require("../../models/VaultTransactions");

const vaultController = {
    async byId (req, res) {
        const vault = await Storage.findOne({
            userId: req.params.userId
        });
        if (vault === null) {
            const newStorage = new Storage({
                userId: req.params.userId
            });
            await newStorage.save();
            res.json(newStorage);
            return;
        }
        res.json(vault);
    },
    async vaultById (req, res) {
        const vault = await Storage.find(
            {"array.vaultId": req.params.vaultId},
            {_id: 0, array: {$elemMatch: {"vaultId": req.params.vaultId}}}
        )
        res.json(vault[0].array[0]);
    },
    async create (req, res) {
        const requestBody = req.body;
        const newVault = new Vault(requestBody);
        await Storage.updateOne({
            userId: req.params.userId,
            $push: {
                array: newVault
            }
        });
        const newTransactionHistory = new TransactionHistory({
            userId: req.params.userId,
            vaultId: req.body.vaultId
        });
        await newTransactionHistory.save();
        res.json(newVault);
    },
    async delete (req, res) {
        await Storage.updateOne({
            userId: req.params.userId,
            $pull: {
                array: {
                    vaultId: req.params.vaultId
                }
            }
        });
        res.json("vault deleted");
    },
    async favorite (req, res) {
        const findVault = await Storage.updateOne({
            userId: req.params.userId,
            "array.vaultId": req.params.vaultId
            },
            {$set: {
                "array.$.favorite": true
            }}
            
        );
        
        res.json(findVault);
    },
    async update (req, res) {
        console.log("received!")
        const findVault = await Storage.updateOne({
            userId: req.params.userId,
            "array.vaultId": req.params.vaultId
            },
            {$set: {
                "array.$.label": req.body.label,
                "array.$.totalAmount": req.body.amount,
                "array.$.imageURL": req.body.imageURL
            }}
            
        );
        res.json(findVault);
    }
    
}

module.exports = vaultController;