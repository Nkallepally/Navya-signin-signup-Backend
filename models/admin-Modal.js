// (title, description, video Url, topics array, duration, category, )
const mongoose=require("mongoose")

const adminschema=new mongoose.Schema ({
    title:{
        type:String,
        required:true,
    },
      description:{
        type:String,
         required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    topicsArray:{
        type:String,
         required:true,
    },
    duration:{
        type:Number,
         required:true,
    },
    category:{
        type:String,
         required:true,
    },
})

const adminModal=mongoose.model("admin",adminschema);

module.exports=adminModal