const express = require("express")
const productsRouter = express.Router()

const {addingProducts, getAllProducts,}=require("../controllers/productsControllers")
const authentication = require("../middleware/authentication")

productsRouter.post("/",addingProducts)
productsRouter.get('/',getAllProducts)
module.exports=productsRouter