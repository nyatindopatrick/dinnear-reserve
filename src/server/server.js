const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

require("dotenv").config();

app.use(express.static("build"));

// Require Notes routes
const hotelRoutes = require("./routes/hotel.routes");
const mealRoutes = require("./routes/meal.routes");
const payRoutes = require("./routes/checkout.routes");

app.get("/*", function(req, res) {
  res.sendfile(path.join(__dirname, "../../build", "index.html"));
});

app.use("/api", hotelRoutes);
app.use("/api", mealRoutes);
app.use("/api", payRoutes);
// database connection
const db_conn = require("./models/mongoose-connection");
db_conn.databaseConnection().catch(error => console.error(error));

if (require.main === module) {
  app.listen(4000, function() {
    console.log("Express application booted, listening on %s.", 4000);
  });
}
