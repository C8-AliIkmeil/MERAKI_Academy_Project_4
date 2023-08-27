const mongoose = require("mongoose")

const categoriesModel = require("../models/categoriesSchema")
const addingCategories = (req,res)=>{
    const {name,img}=req.body
    const category = new categoriesModel({
        name,
        img
    })
    category.save()
    .then((response)=>{
        res.status(201).json({
            success:true,
            message:"Category has been added successfully",
            author:response
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
            message:"Server Error , please try again",
            err:err.message
        })
    })
}
const getAllCategories = (req,res)=>{
    categoriesModel
    .find()
    .exec()
    .then((categ)=>{
        res.status(200).json({
            success:true,
            message:"Here are the categories",
            categories:categ
        })
    })
    .catch((err)=>{
        res.status(500).json({
            succes:false,
            message:"SomeThing went wrong kindly try again"
        })
    })
}
const getCategoryById = (req,res)=>{
    // console.log(req.params.id);
    let id = req.params.id
    categoriesModel.findById(id)
    .exec()
    .then((response)=>{
        res.status(200).json({
            success:true,
            message:"here is the category",
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
module.exports={addingCategories,getAllCategories,getCategoryById}