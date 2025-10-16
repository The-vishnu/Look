import { Router } from "express";
import { addProduct, addProductsBulk, searchProduct } from "../Controllers/product.controller.js";
import { protectRoute, veryfiAdmin } from "../Middlewares/auth.middleware.js"

const router = Router();

router.post("/add/products", protectRoute, veryfiAdmin, addProduct);
router.post("/add/products/bulk", protectRoute, veryfiAdmin, addProductsBulk);

router.get("/products", searchProduct)


export default router;