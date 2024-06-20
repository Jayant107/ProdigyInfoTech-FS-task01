const express = require("express");
const router = require("./router")
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1", router);

app.listen(8000, () => console.log("server connected"));