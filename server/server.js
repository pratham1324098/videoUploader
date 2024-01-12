const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan")
const connectDb  = require("./Database/db");
const app = express();


dotenv.config();
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/media",require("./Routes/Media"))
const port = process.env.PORT;
connectDb();
app.listen(port,()=>{
    console.log(`Node server Running ${port}`);
})