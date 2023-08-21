const express = require("express")
const {createNewRole}= require("../controllers/rolesControllers")

const rolesRouter = express.Router()
rolesRouter.post("/",createNewRole)
module.exports=rolesRouter