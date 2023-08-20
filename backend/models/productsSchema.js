const mongoose = require("mongoose")
const productsSchema = new mongoose.Schema({
    afiaOil:{type:String},
    naderSugar:{type:String},
    sheepMeat:{type:String},
    banana:{type:String},
    orange:{type:String}
})
module.exports=mongoose.model("Products",productsSchema)