const { Meal, Hotel } = require("../models/index");

// Create and Save a new Meal
exports.create = (req, res) => {
  const { name, price, image } = req.body;
  const newMealObj = { name, price, image };

  // add the user id into the Meal object
  const newMeal = new Meal(newMealObj);
  const { id } = req.params;

  newMeal.hotel = id;

  console.log(newMeal);

  newMeal
    .save()
    .then(meal => {
      console.log(meal);
      // update the owner's pets array
      Hotel.findByIdAndUpdate(
        { _id: id }, // query owner by route param
        /*
         Add new pet's ObjectId (_id) to set of Owner.pets.
         We use $addToSet instead of $push so we can ignore duplicates!
         */
        { $push: { meals: meal._id } }
      ).then(user => console.log(user));
    })
    .then(created => {
      res.status(200).send({
        success: true,
        message: "Successfully added the meal",
        created: created
      });
    })
    .catch(err => {
      res
        .status(500)
        .send({
          success: false,
          message: "Internal server Error",
          err: err.message
        }); // pass DB errors along to error handler
    });
};

// retrieve a single meal from the database
exports.show = async (req, res) => {
  try {
    console.log(req.params);
    const { userId, mealId } = req.params;
    const meal = await Meal.findById(mealId);
    if (!meal) {
      res
        .status(400)
        .send({ success: false, message: "Cannot find a meal with that Id" });
    }

    res.status(200).send({
      success: true,
      meal: meal
    });
  } catch (err) {
    /* handle error */
    res
      .status(500)
      .send({
        success: false,
        message: "Internal server error",
        err: err.message
      });
  }
};

// display all the meals specific to a restaurant
exports.index = async (req, res) => {
  try {
    console.log(req.params.id);
    const meals = await Meal.find({ hotel: req.params.id }).exec();
    if (!meals) {
      res.status(400).send({
        message: "No available meals",
        success: false
      });
    }
    return res.status(200).send({
      success: true,
      meals: meals
    });
  } catch (e) {
    /* handle error */
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      e: e.message
    });
  }
};

// Update a note identified by the noteId in the request
exports.update = async (req, res) => {
  try {
    const { mealId } = req.params;
    const updatedMeal = await Meal.findByIdAndUpdate({ _id: mealId }, req.body);
    if (!updatedMeal) {
      res.status(400).send({
        success: false,
        message: "Unprocessable Entity!"
      });
    }

    res.status(200).send({
      success: true,
      message: "Successfully Updated the meal"
    });
  } catch (err) {
    /* handle error */
    res.status(500).send({
      success: false,
      message: "Internal server error",
      err: err.message
    });
  }
};

// Delete a note with the specified noteId in the request
exports.destroy = (req, res) => {};
