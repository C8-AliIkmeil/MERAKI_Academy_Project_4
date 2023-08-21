const express = require("express")
const productsRouter = express.Router()

const {addingProducts, getAllProducts,}=require("../controllers/productsControllers")

productsRouter.post("/",addingProducts)
productsRouter.get('/',getAllProducts)
module.exports=productsRouter