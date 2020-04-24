const Bcrypt = require("bcryptjs");
const { Hotel } = require("../models/index");

// Create and Save a new Hotel
exports.register = (req, res) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  const { name, email, location, website, phone, password, photo } = req.body;
  const newHotelObj = { name, email, location, website, phone, password, photo };

  const newHotel = new Hotel(newHotelObj);

  newHotel.save(err => {
    if (err) {
      console.log(err.message);
      return res.status(412).send({
        success: false,
        message: err.message
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully created the Hotel"
    });
  });
};

// Retrieve and return all notes from the database.
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Hotel.findOne({ email: email }).exec();
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "The username does not exist"
      });
    }
    if (!Bcrypt.compareSync(password, user.password)) {
      return response.status(400).send({
        success: false,
        message: "The password is Invalid!!"
      });
    }

    res.status(200).send({
      success: true,
      message: "Successfully logged in",
      user: user
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      err: err.message
    });
  }
};

exports.showAll = async (req, res) => {
  const users = await Hotel.find({});
  if (!users) {
    return res.status(400).send({
      success: false,
      message: "Bad request!"
    });
  }
  return res.status(200).send(users);
};
// Find a single note with a noteId
exports.show = async (req, res) => {
  try {
    const user = await Hotel.findById(req.params.id).exec();

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Invalid User ID!"
      });
    }

    res.status(200).send({
      success: true,
      user: user
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      err: err.message
    });
  }
};

// Update a note identified by the noteId in the request
exports.update = async (req, res) => {
  try {
    const { name, email, location, website, phone } = req.body;
    const newDetails = { name, email, location, website, phone };
    const updatedUser = await Hotel.findByIdAndUpdate(
      req.params.id,
      newDetails,
      { new: true }
    ).exec();
    if (!updatedUser) {
      return res.status(400).send({
        success: false,
        message: "Invalid User ID!"
      });
    }

    res.status(200).send({
      success: true,
      message: "Successfully update",
      user: updatedUser
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      err: err.message
    });
  }
};

// Delete a note with the specified noteId in the request
exports.destroy = (req, res) => {};
