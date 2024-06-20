const crypto = require("crypto");

const generatePassword = (password) => {
    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString('hex');

    return{ 
        hash,
        salt
    }
}

const validatePassword = (password, hash, salt) => {
    const newHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString('hex');
    return hash === newHash;
}

module.exports = {
    generatePassword,
    validatePassword
}