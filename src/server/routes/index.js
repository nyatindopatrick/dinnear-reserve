const express = require('express');
const router = express();
const mealController = require("../controllers/meal.controller");
const validationMiddleware = require('../_helpers/validate')


router.get("/", baseController.index);
router.post("/signup", validation.signup, baseController.signup)

module.exports = router;
