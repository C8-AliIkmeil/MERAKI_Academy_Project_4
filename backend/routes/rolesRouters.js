const express = require("express")
const {createNewRole}= require("../controllers/productsControllers")

const rolesRouter = express.Router()
rolesRouter.post("/",createNewRole)
module.exports=rolesRouter