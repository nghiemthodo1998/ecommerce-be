const ObjectId = require("mongodb").ObjectId;

const reviews = [
  {
    comment: "review about Tv",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "review about Video",
    rating: 4,
    user: { _id: ObjectId(), name: "Tom" },
  },
  {
    comment: "review about Laptop",
    rating: 5,
    user: { _id: ObjectId(), name: "Marry" },
  },
];

module.exports = reviews;
