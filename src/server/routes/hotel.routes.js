const hotelController = require('../controllers/hotel.controller')
const validation = require('../middleware/validation-middleware')


const express = require('express');
const router = express();

// Create a new Hotel User
router.post('/users/new', validation.register,hotelController.register);
router.post('/users/login', validation.login, hotelController.login)
// get one user details
router.get('/users/:id', hotelController.show)
// localhost:4000/api/users/5ea1e148ed6e373c1a801c77
router.post('/users/:id', validation.update, hotelController.update)

module.exports = router
