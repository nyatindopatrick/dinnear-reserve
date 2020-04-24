const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

let hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, index: true, unique: true, required: true },
  location: { type: String, required: true },
  website: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal"
    }
  ],
  createdOn: { type: Date, default: Date.now }
});

hotelSchema.plugin(uniqueValidator);

let mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    // but it will refer to the Hotel model
    // (the first parameter to the mongoose.model method)
    ref: "Hotel"
  }
});

let transactionSchema = new mongoose.Schema({
  transactionID: { type: String, required: true },
  amount: { type: Number, required: true },
  quantity: { type: Number, required: true },
  phone: { type: String, required: true },
  account: { type: Number, required: true },
  from: { type: String, required: true },
  createdOn: { type: Date, default: Date.now }
});

const Meal = mongoose.model("Order", mealSchema);
const Hotel = mongoose.model("Hotel", hotelSchema);
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {
  Meal,
  Hotel,
  Transaction
};
