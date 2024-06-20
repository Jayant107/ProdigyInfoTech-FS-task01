const mongoose = require("mongoose");

const connectDB =  async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/auths");
        console.log("DB Connected")
    }catch(err){
        console.log("error", err);
    }
}

module.exports = connectDB;