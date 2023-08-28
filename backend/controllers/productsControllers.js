const mongoose = require("mongoose")
const productsModel = require ("../models/productsSchema")
const { Login } = require("./usersControllers")
const addingProducts = (req,res)=>{
    const {name,price,img,category}=req.body
    const productInfo = new productsModel({
        name,
        price,
        img,
        category
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
// const userId=req.token.userId
console.log(req.token);
productsModel
.find()
.exec()
.then((products)=>{
    if (products.length){
        res.status(201).json({
            success:true,
            message:"Here are all the products",
            // userId:userId,
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

const getProductBySearch = (req,res)=>{
    // console.log(req.query.name);
    let search = req.query.name
    // console.log(search);
    const newSearch = new RegExp(search,"gi")
    // let search = req.query
    productsModel.find({name:{$regex:newSearch}})
    .then((response)=>{
        // console.log(response);
        res.json(response)
    })
    .catch((err)=>{
        console.log(err);
    })
}


const getProductByCategId = (req,res)=>{
    let id = req.params.id
    productsModel.find({category:id})
    .exec()
    .then((response)=>{
        res.status(200).json({
            success:true,
            message:"here is the products of this category",
            categories: response
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    })
}

module.exports={addingProducts,getAllProducts,getProductByCategId,getProductBySearch}
