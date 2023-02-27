const Product = require("../models/ProductModel");

const getProducts = (req, res) => {
  // try {
  //   const data = new Product({ name: "Do day 1" });
  //   res.send(data);
  //   data.save();
  // } catch (error) {
  //   next(error);
  // }
  res.send("Handling product routes, e.g. search for products");
};

module.exports = getProducts;
