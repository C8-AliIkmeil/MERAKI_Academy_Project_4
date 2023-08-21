const express = require("express");
const { addingCategories } = require("../controllers/categoriesControllers");
const catRouters = express.Router();


 catRouters.post("/",addingCategories);

module.exports = catRouters;
