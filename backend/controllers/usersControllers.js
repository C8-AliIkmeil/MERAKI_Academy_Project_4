const usersModel = require("../models/usersSchema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const register = (req,res)=>{
    const {firstName,lastName,email,password,age,location}=req.body
    const userAcount= new usersModel({
        firstName,
        lastName,
        email,
        password,
        age,
        location,
        role:"64e26828d543a8d9e7f94524"
    })
    userAcount.save().then((result)=>{
        res.status(201).json({
            success:true,
            message:"Congrats you're a part of our family right now ",
            author:result
        })
    }).catch ((err)=>{
        res.status(403).json({
            success:false,
            message:"Server Error please try again",
            err:err.message
        })
    })
}
const Login =(req,res)=>{
    const email = req.body.email.toLowerCase()
    const password=req.body.password
    usersModel.findOne({email}).populate("role","-_id -__v")
    .then(async (response)=>{
        if (!response){
            return res.status(403).json({
                success:false,
                message:"The email does not exist or the password you have entered is not correct"
            })
        }
        try{
            const valid = await bcrypt.compare(password,response.password)
            if(!valid){
                res.status(403).json({
                    success:false,
                    message:"The email you have entered does not exist or the password you have entered is not correct"
                })
            }
            const payload= {
                email:response.email,
                password:response.password,
                userId: response._id,
                firstName:response.firstName,
                role: response.role,
                location: response.location,
                userName: `${response.firstName.charAt(0).toUpperCase() + response.firstName.slice(1)} ${response.lastName.charAt(0).toUpperCase() + response.lastName.slice(1)}` 
            }
            const options = {
                expiresIn:"60m"
            }
            const token = jwt.sign(payload,process.env.SECRET,options)
            res.status(200).json({
                success:true,
                message:"Valid login credentials",
                token: token,
                userName: `${response.firstName.charAt(0).toUpperCase() + response.firstName.slice(1)} ${response.lastName.charAt(0).toUpperCase() + response.lastName.slice(1)}`
            })
        }catch(error){
            throw new Error(error.message)
        }
    })
    .catch((err)=>{
        res.status(403).json({
            success:false,
            message:"Server Error please try again",
            err:err.message
        })
    })
}
module.exports={
    register,
    Login
}