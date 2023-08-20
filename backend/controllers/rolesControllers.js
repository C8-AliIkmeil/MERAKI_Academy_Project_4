const mongoose = require("mongoose")
const rolesModel = require ("../models/rolesSchema")
const createNewRole = (req,res)=>{
    const {role,permissions}=req.body
    const newRole = new rolesModel({
        role,
        permissions
    })
    newRole.save()
    .then((response)=>{
        res.status(201).json({
            success:true,
            message:`Role Created`
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
            message:`Server Error please try again`,
            err:err.message
        })
    })
}
module.exports= {createNewRole}