const mongoose = require("mongoose")

const VideoModelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    videos:[
        {type:String}
    ],
},{timestamps:true})

module.exports = Media =mongoose.model("Media",VideoModelSchema)