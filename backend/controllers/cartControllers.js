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
            message:"Something went wrong kindly try to add your Item again"
        })
    })
}
const getAllCartProducts = (req,res)=>{
    // console.log(req.token);
    const userId = req.token.userId
    cartModel.find({userId:userId}).populate("productId")
    .exec().then((response)=>{
        res.status(201).json({
            success:true,
            message:"Here is your cart products",
            products: response
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Something went wrong kindly refresh your page and try again"
        })
        })
}

const deleteProductFromCart = (req,res)=>{
    const id = req.params.id
    // console.log(req.params);
    // console.log(req.params);
    cartModel.findByIdAndDelete({_id:id})

    .then((response)=>{
        res.status(200).json({
            success:true,
            message:"Item Deleted"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error",
            err:err.message
        })
    })
}


module.exports={addProductsToCart,getAllCartProducts,deleteProductFromCart}


