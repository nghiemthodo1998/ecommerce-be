const getProducts = (req, res) => {
  // try {
  //   const data = new Product({ name: "Do day 1" });
  //   res.send(data);
  //   data.save();
  // } catch (error) {
  //   next(error);
  // }
  res.send("Products");
};

module.exports = getProducts;
