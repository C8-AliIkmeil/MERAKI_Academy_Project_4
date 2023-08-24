const express =require("express")
const { addProductsToCart,getAllCartProducts,deleteProductFromCart } = require("../controllers/cartControllers")
const authentication = require("../middleware/authentication")
const cartRouter = express.Router()

cartRouter.get("/",authentication,getAllCartProducts)
cartRouter.post("/",addProductsToCart)
cartRouter.delete("/:id",deleteProductFromCart)
module.exports=cartRouter
