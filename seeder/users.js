const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin@gmail.com", 10),
  },
  {
    name: "NghiemTho",
    lastName: "Do",
    email: "do@gmail.com",
    password: bcrypt.hashSync("do@gmail.com", 10),
  },
];

module.exports = users;
