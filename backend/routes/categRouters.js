const express = require("express");
const { addingCategories } = require("../controllers/categoriesControllers");
const categRouters = express.Router();


 categRouters.post("/",addingCategories);

module.exports = categRouters;
