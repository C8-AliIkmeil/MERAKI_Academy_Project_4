
const categoriesModel = require("../models/categoriesSchema")
const addingCategories = (req,res)=>{
    const {name}=req.body
    const category = new categoriesModel({
        name
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
module.exports={addingCategories}