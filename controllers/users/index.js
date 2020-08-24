const User = require("../../models/User");

const userController  = {
    byId (req, res) {
        User.findOne({
            userId: req.params.userId
        }).exec((err, user) => res.json(user));
    },
    async create (req, res) {
        const requestBody = req.body;
        const findUser = await User.findOne({
            userId: req.body.userId
        });
        if (findUser) {
            res.json(findUser);
            return;
        }
        
        const newUser = new User(requestBody);
        newUser.save((err, saved) => {
            User.findOne({_id: saved._id})
                .exec((err, user) => res.json(user));
        })
    }
}

module.exports = userController;