const validator = require('../_helpers/validate');

const createNewMeal = (req, res, next) => {
  const validationRule = {
    "name": "required|string",
    "price": "required|integer",
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        });
    } else {
      next();
    }
  });
}

const register = (req, res, next) => {
  const validationRule = {
    "name": "required|string",
    "email": "required|email",
    "location": "required|string",
    "website": "required|string",
    "phone": "required|string",
    "password": "required|string|min:6",
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        });
    } else {
      next();
    }
  });
}

const login = (req, res, next) => {
  const validationRule = {
    "email": "required|email",
    "password": "required|string|min:6",
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        });
    } else {
      next();
    }
  });
}


const update = (req, res, next) => {
  const validationRule = {
    "name": "string",
    "email": "email",
    "location": "string",
    "website": "string",
    "phone": "string",
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        });
    } else {
      next();
    }
  });
}

module.exports = {
  createNewMeal,
  register,
  login,
  update
}
