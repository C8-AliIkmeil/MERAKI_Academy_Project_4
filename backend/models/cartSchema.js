const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    addedItems :[{type:String}]
})
module.exports=mongoose.model("Cart",cartSchema)