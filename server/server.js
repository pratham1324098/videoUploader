const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan")
const connectDb  = require("./Database/db");
const path = require("path")
const app = express();


dotenv.config();
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'../client/build')))

app.get("*",function(req,res){
    res.sendFile(express.static(path.join(__dirname,"../client/build")))
})
app.use("/api/v1/media",require("./Routes/Media"))
app.use("/public", express.static(path.join(__dirname, "../client/public/index.html")));
const port = process.env.PORT;
connectDb();
app.listen(port,()=>{
    console.log(`Node server Running ${port}`);
})