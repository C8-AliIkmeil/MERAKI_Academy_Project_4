const express =require("express")
const { addProductsToCart,getAllCartProducts } = require("../controllers/cartControllers")
const cartRouter = express.Router()

cartRouter.get("/",getAllCartProducts)
cartRouter.post("/",addProductsToCart)
module.exports=cartRouter
