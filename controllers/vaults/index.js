const Storage = require("../../models/Vault");
const Vault = require("../../models/VaultDetails");

const vaultController = {
    async byId (req, res) {
        const vault = await Vault.findOne({
            userId: req.params.userId
        });
        res.json(vault);
    },
    async create (req, res) {
        const requestBody = req.body;
        const newVault = new Vault(requestBody);
        await Storage.updateOne({
            userId: req.params.userId,
            $push: {
                array: newVault
            }
        })
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
    }
}

module.exports = vaultController;