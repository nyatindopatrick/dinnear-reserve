const mealController = require('../controllers/meal.controller')
const validation = require('../middleware/validation-middleware')
module.exports = (app) => {

    // Create a new Meal
  app.post('/hotels/:hotelId/meals', validation.createNewMeal, mealController.create);

    // // Retrieve all Meal
    // app.get('/notes', notes.findAll);

    // // Retrieve a single Meal with MealID
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Meal with MealId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Meal with MealID
    /* app.delete('/notes/:noteId', notes.delete); */
}
