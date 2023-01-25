const { createNewUser, loginUser } = require("../Controllers/Auth.controller")
const { getAllUser, getSingleUser, deleteSingleUser, updateSingleUser} = require("../Controllers/UserController")

const router =require("express").Router()



router.route('/user/register').post(createNewUser)
router.route('/user/login').post(loginUser)

router.route('/users').get(getAllUser)

router.route('/user/:id').get(getSingleUser).delete(deleteSingleUser).put(updateSingleUser)





module.exports=router