const mongoose =require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/StudentMng',{useNewUrlParser:true}).then(()=>{
    console.log("mongodb connected successfully" );
}).catch((error)=>{
    console.log("error",error)
})