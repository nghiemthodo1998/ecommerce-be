const categories = [
  {
    name: "Books",
    description: "Books - content description",
    image: "/images/tablets-category.png",
    attrs: [{ key: "genre", value: ["movie", "comedy", "thriller"] }],
  },
  {
    name: "Videos",
    description: "Videos - content description",
    image: "/images/tablets-category.png",
  },
  {
    name: "Computers",
    description: "Computers - content description",
    image: "/images/tablets-category.png",
    attrs: [
      { key: "RAM", value: ["1 TB", "2 TB", "4 TB"] },
      { key: "color", value: ["blue", "red", "black"] },
    ],
  },
];

module.exports = categories;
