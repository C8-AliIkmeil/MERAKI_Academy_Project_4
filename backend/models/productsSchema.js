const mongoose = require("mongoose")
const productsSchema = new mongoose.Schema({
    name:{type:String},
    cost:{type:Number},
    price:{type:Number},
    img:{type:String},
    category:[{type:mongoose.Schema.Types.ObjectId},ref="categories"]
})
module.exports=mongoose.model("Products",productsSchema)