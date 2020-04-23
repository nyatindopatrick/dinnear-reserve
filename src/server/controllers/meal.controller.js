const { Meal }= require('../models/index')

// Create and Save a new Meal
exports.create = (req, res) => {
  const {name, price } = req.body
  const newMealObj = { name, price }
  const newMeal = new Meal(newMealObj)

  newMeal.save((err)=>{
    if (err){
      console.log(err.message)
      return res.status(412).send({
        success: false,
        message: err.message
      })
  }
    return res.status(200).json({
      success:true,
      message: "Successfully created the Meal"
    })
  })

};

// Retrieve and return all notes from the database.
exports.index = (req, res) => {

};

// Find a single note with a noteId
exports.show = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.destroy = (req, res) => {

};
