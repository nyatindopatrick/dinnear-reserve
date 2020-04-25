exports.pay = async (req, res) => {
  const { phone, price, item } = req.body;
  console.log(req.body);
  res.status(200).send("sent!")
};
