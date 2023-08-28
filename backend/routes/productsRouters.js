const express = require("express")
const productsRouter = express.Router()

const {addingProducts, getAllProducts,getProductByCategId,getProductBySearch}=require("../controllers/productsControllers")
const authentication = require("../middleware/authentication")

productsRouter.post("/",addingProducts)
productsRouter.get('/',getAllProducts)
productsRouter.get("/:id",getProductByCategId)
productsRouter.get("/search/name",getProductBySearch)
module.exports=productsRouter