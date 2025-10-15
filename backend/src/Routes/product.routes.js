import { Router } from "express";
import { addProduct, seedProducts } from "../Controllers/product.controller.js";
import { protectRoute, veryfiAdmin } from "../Middlewares/auth.middleware.js"

const router = Router();

router.post("/add/products", protectRoute, veryfiAdmin, addProduct);


export default router;