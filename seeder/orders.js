const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({ length: 22 }).map((_, index) => {
  let day = 20;
  if (index < 10) {
    var hour = "0" + index;
    var subtotal = 100;
  } else if (index > 16 && index < 21) {
    var hour = index;
    var subtotal = 100 + 12 * index;
  } else {
    var hour = index;
    var subtotal = 100;
  }
  return {
    user: ObjectId(),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        name: "Product name",
        price: 34,
        image: { path: "/images/tablets-category.png" },
        quantity: 532,
        count: 65,
      },
    ],
    paymentMethod: "PayPal",
    isPaid: false,
    isDelivered: false,
    createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`,
  };
});

module.exports = orders;
