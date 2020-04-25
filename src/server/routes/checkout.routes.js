const { pay } = require("../controllers/checkout.controller");
const router = require("express").Router();

router.post("/checkout", pay);

module.exports = router;
