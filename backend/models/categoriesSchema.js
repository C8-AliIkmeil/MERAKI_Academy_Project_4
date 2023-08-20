const mongoose= require("mongoose")
const categoriesSchema = new mongoose.Schema({
    market :{type:String},
    meatAndChicken:{type:String},
    vegetablesAndFruits:{type:String}
})
module.exports=mongoose.model("categories",categoriesSchema)
