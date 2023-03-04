const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getBestSellers,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
  adminUpdateProduct,
  adminUpload,
  adminDeleteProductImage,
} = require("../controllers/productController");

router.get("/category/:categoryName/search/:searchQuery", getProducts);
router.get("/category/:categoryName", getProducts);
router.get("/search/:searchQuery", getProducts);
router.get("/", getProducts);
router.get("/bestsellers", getBestSellers);
router.get("/get-one/:id", getProductById);

//admin routes
router.get("/admin", adminGetProducts);
router.get("/admin/:id", adminDeleteProduct);
router.post("/admin", adminCreateProduct);
router.put("/admin/:id", adminUpdateProduct);
router.post("/admin/upload", adminUpload);
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage);

module.exports = router;
