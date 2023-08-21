const express =require("express")
const { addProductsToCart } = require("../controllers/cartControllers")
const cartRouter = express.Router()


cartRouter.post("/",addProductsToCart)
module.exports=cartRouter
