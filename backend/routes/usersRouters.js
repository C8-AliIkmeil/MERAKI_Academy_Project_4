const express = require("express")

const usersRouter = express.Router()
const {register,Login}= require ("../controllers/usersControllers")

usersRouter.post("/register",register)
usersRouter.post("/login",Login)
module.exports = usersRouter