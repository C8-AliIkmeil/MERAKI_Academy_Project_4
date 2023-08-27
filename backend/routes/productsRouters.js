const express = require("express")
const productsRouter = express.Router()

const {addingProducts, getAllProducts,getProductByCategId}=require("../controllers/productsControllers")
const authentication = require("../middleware/authentication")

productsRouter.post("/",addingProducts)
productsRouter.get('/',getAllProducts)
productsRouter.get("/:id",getProductByCategId)
module.exports=productsRouter