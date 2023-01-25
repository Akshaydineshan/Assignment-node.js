const User =require("../Models/User.model")

exports.createNewUser =async(req,res,next)=>{

     try{
        const user = await User.create(req.body)

        res.status(201).json({
            success:true,
            message:"created user successfully",
            user
        })

     }catch(err){
        console.log(err)

     }
   
}
exports.loginUser =async(req,res,next)=>{
     let {email,password}=req.body
     try{
        const user = await User.findOne({email}).select("+password")
         
        let isPasswordMatch =user.comparePassword(password)

        if(!isPasswordMatch){
            console.log(" passw ord mismatcherror");
        }
         
        res.status(201).json({
            success:true,
            message:"login successfully",
            user
        })

     }catch(err){

     }
   
}