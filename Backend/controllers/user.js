const User = require("../models/user");
const { generatePassword, validatePassword } = require("../config/passowrdUtils");
const { jwtEncode } = require("../config/jwtUtils");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const { hash, salt } = generatePassword(password);
        const newUser = await User.create({
            username,
            email,
            hash,
            salt
        });
        return res.status(200).json({
            msg: "new user created",
            token: jwtEncode(newUser._id)
        })
    } catch (error) {
        return res.status(400).json({
            msg: "unexpected error",
        })
    }
}

const signin = async (req, res) => {
    try {
        const { emailOrUsername, password } = req.body;
        let userObj = {username: emailOrUsername};
        if(emailOrUsername.includes("@gmail.com")){
            userObj = {email: emailOrUsername}
        }
        const isValidUser = await User.findOne(userObj);
        if(!isValidUser) {
            return res.status(400).json({
                msg: "Invalid User"
            })
        }
        const isValidPass = validatePassword(password, isValidUser.hash, isValidUser.salt);
        if(!isValidPass){
            return res.status(400).json({
                msg: "Invalid Password"
            })
        }
        return res.status(200).json({
            msg: "Successfully singined",
            token: jwtEncode(isValidUser._id)
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Unexpected error"
        })
    }
}

const home = (req, res) => {
    return res.status(200).json({
        msg: "Welcome"
    })
}

module.exports = {
    signup,
    signin,
    home
}