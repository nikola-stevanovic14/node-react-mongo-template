const { expressjwt: jwt } = require("express-jwt");
const config = require("config");

const secret = config.jwt.key;

const authToken = () => jwt({ secret, algorithms: ["HS256"], requestProperty: "user" });

const authEnabled = () => {
    return (req, res, next) => {
        if(!req.user) return res.sendStatus(401);
        if(!req.user.enabled) return res.sendStatus(403);
        next();
    }
}

const authRole = (roles) => {
    return (req, res, next) => {
        if(!req.user) return res.sendStatus(401);
        if(!req.user.roles.some((role) => roles.includes(role))) return res.sendStatus(403);
        next();
    }
}

module.exports = {
    authToken,
    authEnabled,
    authRole
}