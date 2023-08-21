const mongoose = require("mongoose")

const cartModel = require ("../models/cartSchema")
const addProductsToCart =(req,res)=>{
    const {userId,productId} = req.body
    const productsAdded = new cartModel({
        userId,
        productId
    })
    productsAdded
    .save()
    .then((response)=>{
        res.status(201).json({
            success:true,
            message:"Item added to the cart",
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Something went wrong kindly to try to add your Item again"
        })
    })
}




module.exports={addProductsToCart}