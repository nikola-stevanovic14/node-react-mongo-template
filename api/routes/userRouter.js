const express = require('express');
const router = express.Router();
const Users = require('../database/users')
const bcrypt = require('bcrypt');

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
        passwordHash: passwordHash,
        enabled: false,
        roles: []
    });
    await Users.create(user);

    return res.sendStatus(200);
});

module.exports = router;