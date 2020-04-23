const mealController = require('../controllers/meal.controller')
const validation = require('../middleware/validation-middleware')


const express = require('express');
// const router = express();
const router = express.Router({ mergeParams: true })

    // Create a new Meal
  router.post('/users/:id/meals', mealController.create);
// Get all meals specific to a certain Hotel
router.get('/users/:id/meals', mealController.index)
// get a single meal based on the current loggin in user
//  api/users/:userId/meals/:mealId
router.get('/users/:userId/meals/:mealId', mealController.show)
// update a specific meal entity
router.post('/users/:userId/meals/:mealId', mealController.update)
//


module.exports = router
