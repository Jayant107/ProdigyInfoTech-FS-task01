const express = require("express");
const { signup, signin, home } = require("../controllers/user");
const userAuth = require("../middlewares/user")

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/home", userAuth, home);

module.exports = userRouter;