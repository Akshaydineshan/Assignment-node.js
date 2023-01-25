
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
         required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    mobile: {
        type: Number,
        required:true
    },
    profesion: {
        type: String
    },
})



//hashing password
userSchema.pre("save",async function(next){

this.password =await bcrypt.hash(this.password,10)
})

//compre password
userSchema.methods.comparePassword= function(enterPassword){
  return bcrypt.compare(enterPassword,this.password)
}




module.exports = mongoose.model("User", userSchema)