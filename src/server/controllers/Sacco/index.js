const { Login, Sacco, Riders } = require('../../models/data');

exports.sacco = (req, res) => {
  Sacco.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
};

exports.riders = (req, res) => {
  Riders.find({}, (err, data) => {
    if (err) console.err(err);
    res.send(data);
  });
};
