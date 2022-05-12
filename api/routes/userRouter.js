const express = require('express');
const router = express.Router();
const Users = require('../database/users')
const bcrypt = require('bcrypt');
const {authToken, authEnabled, authRole} = require('../middleware/authMiddleware');
const {ROLES} = require('../permissions/roles');
const ObjectId = require('mongodb').ObjectId;

router.post('/', 
async (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password, 10)

    const userAlreadyExists = await Users.countDocuments({email: req.body.email});
    if(userAlreadyExists) {
        return res.status(400).send('User with specified email already exists.');
    }

    const user = new Users({
        email: req.body.email,
        name: req.body.name,
        nameLowerCase: req.body.name.toLowerCase(),
        passwordHash: passwordHash,
        enabled: false,
        roles: []
    });
    await Users.create(user);

    return res.sendStatus(200);
});

router.get("/userManagement", 
authToken(),
authEnabled(),
authRole([ROLES.ADMIN]),
async (req, res) => {
    const users = await Users.find();
    const model = [];
    users.forEach(user => {
        model.push({
            id: user._id,
            email: user.email,
            name: user.name,
            enabled: user.enabled,
            roles: user.roles
        });
    });

    res.send(model);
});

router.get("/enabled",
authToken(),
authEnabled(),
authRole([ROLES.ADMIN]),
async (req, res) => {
    const userId = req.query.userId;
    const enabled = req.query.enabled;
    await Users.updateOne({_id: ObjectId(userId)}, {$set: {enabled, enabled}});
    return res.sendStatus(200);
});

router.put("/changeRoles",
authToken(),
authEnabled(),
authRole([ROLES.ADMIN]),
async (req, res) => {
    const userId = req.body.userId;
    const roles = req.body.roles;
    await Users.updateOne({_id: ObjectId(userId)}, {$set: {roles, roles}});
    return res.sendStatus(200);
})

module.exports = router;