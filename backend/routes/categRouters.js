const express = require("express");
const { addingCategories, getAllCategories,getCategoryById } = require("../controllers/categoriesControllers");
const cartRouter = require("./cartRouters");
const categRouters = express.Router();


 categRouters.post("/",addingCategories);
 categRouters.get("/",getAllCategories)
 categRouters.get("/:id",getCategoryById)
module.exports = categRouters;
