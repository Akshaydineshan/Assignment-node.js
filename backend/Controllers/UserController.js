const User =require("../Models/User.model")


exports.getAllUser =async(req,res,next)=>{
    try{
        const users = await User.find()

        res.status(201).json({
            success:true,
            message:"get all users",
            users
        })

     }catch(err){

     }

}
exports.getSingleUser =async(req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)

        res.status(201).json({
            success:true,
            message:"get single user",
            user
        })

     }catch(err){

     }

}
exports.deleteSingleUser =async(req,res,next)=>{
    try{
        const user = await User.findByIdAndRemove(req.params.id)

        res.status(201).json({
            success:true,
            message:"delete single user",
            user
        })

     }catch(err){

     }

}
exports.updateSingleUser =async(req,res,next)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})

        res.status(201).json({
            success:true,
            message:"update single user",
            user
        })

     }catch(err){

     }

}