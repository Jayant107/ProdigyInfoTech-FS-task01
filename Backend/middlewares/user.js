const { jwtDecode } = require("../config/jwtUtils");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    const userHeader = req.headers.authorization;
    if(!userHeader || !userHeader.startsWith("Bearer ")){
        return res.status(400).json({
            msg: "UnAuthorized"
        })
    }
    const token = userHeader.split(" ")[1];
    const userId = jwtDecode(token);

    const isValid = await User.findOne({_id: userId.userId});
    if(!isValid){
        return res.status(400).json({
            msg: "UnAuthorized"
        })
    }
    req.userId = userId;
    next();
}

module.exports = userAuth;