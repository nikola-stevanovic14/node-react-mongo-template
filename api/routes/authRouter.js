const express = require('express');
const router = express.Router();
const Users = require('../database/users')
const bcrypt = require('bcrypt');

router.post('/', 
async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({email: email});
    if(!user) {
        return res.status(400).send('Incorrect email.');
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.passwordHash);
    if(!isPasswordCorrect) {
        return res.status(400).send('Incorrect password.');
    }

    if(!user.enabled) {
        return res.status(403).send('Account not enabled. Please contact the administrator.');
    }
    
    const token = user.createJwtToken();

    return res.send(token);
});

module.exports = router;