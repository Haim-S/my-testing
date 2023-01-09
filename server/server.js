require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());


app.use("/pic", require("./routes/picturesRoutes"));







const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_LOCAL_ENDPOINT).then(()=> console.log("connect to mongoDB")).catch(()=> console.log("false connect"));


const PORT = process.env.PORT || 4050;

app.listen(PORT, console.log(`run on ${PORT}`));