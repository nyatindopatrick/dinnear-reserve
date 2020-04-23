let express = require("express");
const config = require('./config/index')

const mongoose = require('mongoose');

require('dotenv').config()

let app = express();

// database connection
const db_conn = require('./models/mongoose-connection')
db_conn.databaseConnection().catch(error => console.error(error))

if (require.main === module) {
  app.listen(config.PORT, function () {
    console.log("Express application booted, listening on %s.", config.PORT);
   });
}
