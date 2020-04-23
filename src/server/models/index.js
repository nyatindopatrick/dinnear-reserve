let yup = require('yup');

let hotelSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  location: yup.string().required(),
  website: yup.string().url(),
  createdOn: yup.date().default(function() {
    return new Date();
  }),
});

let mealSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive(),
  createdOn: yup.date().default(function() {
    return new Date();
  }),
});

let transactionSchema = yup.object().shape({
  transactionID: string().required(),
  amount: number().required().positive(),
  quantity.number().required().positive().default(1),
  phone:string().required(),
  account: number().required().positive(),
  from: string().required(),
  createdOn: yup.date().default(function(){
    return new Date();
  })
})

const Meal = mongoose.model('Order' mealSchema)
const Hotel = mongoose.model('Hotel', hotelSchema)
const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = {
  Meal,
  Hotel,
  Transaction
}
