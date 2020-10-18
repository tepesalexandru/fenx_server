const VaultGoals = require("../../models/VaultGoals");

const goalsController = {
    async get (req, res) {
        const goal = await VaultGoals.findOne({
            vaultId: req.params.vaultId
        });
        console.log(goal);
        res.json(goal);
    },
    async activate (req, res) {
        const findGoal = await VaultGoals.updateOne({
            vaultId: req.params.vaultId,
            $set: {
                hasGoal: true
            }
        });
        res.json(findGoal);
    }
}

module.exports = goalsController;