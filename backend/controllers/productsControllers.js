const mongoose = require("mongoose")
const productsModel = require ("../models/productsSchema")
const { Login } = require("./usersControllers")
const addingProducts = (req,res)=>{
    const {name,price,img}=req.body
    const productInfo = new productsModel({
        name,
        price,
        img
    })
    productInfo
    .save()
    .then((response)=>{
        res.status(201).json({
            success:true,
            message:"Product added",
            author:response
        })
    })
    .catch((err)=>{
        res.status(403).json({
            success:false,
            message:"Server Error kindly try again",
            err:err.message
        })
    })
}
const getAllProducts = (req,res)=>{
const userId=req.token.userId
console.log(req.token);
productsModel
.find()
.exec()
.then((products)=>{
    if (products.length){
        res.status(201).json({
            success:true,
            message:"Here are all the products",
            userId:userId,
            products:products
        })
    }else{
        res.status(200).json({
            success:false,
            message:"There are no products to shop yet",

        })
    }

})
.catch((err)=>{
    res.status(500).json({
        success:false,
        message:"Server error , kindly try again later"
    })
})

}


module.exports={addingProducts,getAllProducts}