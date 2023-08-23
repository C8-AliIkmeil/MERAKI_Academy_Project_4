const express = require("express");
const { addingCategories, getAllCategories } = require("../controllers/categoriesControllers");
const categRouters = express.Router();


 categRouters.post("/",addingCategories);
 categRouters.get("/",getAllCategories)

module.exports = categRouters;
