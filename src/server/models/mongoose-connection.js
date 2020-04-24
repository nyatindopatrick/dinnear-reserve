const config = require("../config/index");
const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
  console.log("Connection Established");
});

mongoose.connection.on("reconnected", () => {
  console.log("Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});

mongoose.connection.on("close", () => {
  console.log("Connection Closed");
});

mongoose.connection.on("error", error => {
  console.log("ERROR: " + error);
});
databaseConnection = async () => {
  await mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  });
};

module.exports.databaseConnection = databaseConnection;
