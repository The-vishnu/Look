import express from 'express';
import Product from '../Models/product.models.js';
import dummyProducts from '../lib/dummyProductData.js';

export const addProduct = async (req, res) => {
    const { admin, name, description, price, category, stock, images, brand, sku, tags } = req.body;
    const user = req.user;

    try {

        //Checking user is admin
        if(user.role !== "Admin") {
            console.log(user.role);
            return res.status(401).json({message: "Access denied - Admin only"})
        }

        //adding the product
        const newProduct = await Product.create({
            admin: req.user._id,
            name,
            description,
            price,
            category,
            stock,
            images,
            brand,
            sku,
            tags
        });

        res.status(201).json({newProduct});
        console.log({newProduct});


    } catch (error) {
        res.status(501).json({message: "internal server error"});
        console.log(`Error in Product Controller: ${error}`);
    }
}

// controller ke andar
export const seedProducts = async (req, res) => {
    try {
        const createdProducts = await Product.insertMany(dummyProducts);
        res.status(201).json({ createdProducts });
        console.log({ createdProducts });
    } catch (error) {
        console.error("Error in seeding products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
