const jwt = require("jsonwebtoken");

const jwtEncode = (userId) => {
    const token = jwt.sign({ userId }, "secret");
    return token;
}

const jwtDecode = (token) => {
    const userId = jwt.verify(token, "secret");
    return userId
}

module.exports = {
    jwtEncode,
    jwtDecode
}