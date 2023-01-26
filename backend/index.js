const express = require("express")
require("dotenv").config({path:"./Config/.env"})
const app = express()
const cors =require("cors")
require("./db")
const ErrorHandler =require("./Middleware/error")

//middlewares
app.use(express.json())
app.use(cors())

const userRoute = require('./Routes/user.routes')

app.use("/api/v1",userRoute)

app.use(ErrorHandler)




app.listen(process.env.PORT,()=>{
    console.log(`creating server http://localhost:${process.env.Port}`);
})