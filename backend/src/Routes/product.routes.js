import { Router } from "express";
import { addProduct, addProductsBulk, Products, searchProduct, generateProductImage } from "../Controllers/product.controller.js";
import { protectRoute, veryfiAdmin } from "../Middlewares/auth.middleware.js";
import multer from "multer";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post("/add/products", protectRoute, veryfiAdmin, addProduct);
router.post("/add/products/bulk", protectRoute, veryfiAdmin, addProductsBulk);

router.post(
  "/generate-look",
  upload.fields([
    { name: "userImage", maxCount: 1 },
    { name: "productImage", maxCount: 1 },
  ]),
  generateProductImage
);

router.get("/products", searchProduct);
router.get("/all/products", Products)


export default router;