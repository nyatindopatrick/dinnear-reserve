const express = require("express");
const config = require('./config/index')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('dotenv').config()



// Require Notes routes
const hotelRoutes = require('./routes/hotel.routes')
const mealRoutes = require('./routes/meal.routes')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api', hotelRoutes)
app.use('/api', mealRoutes)
// database connection
const db_conn = require('./models/mongoose-connection')
db_conn.databaseConnection().catch(error => console.error(error))

if (require.main === module) {
  app.listen(4000, function () {
    console.log("Express application booted, listening on %s.", 4000);
   });
}
