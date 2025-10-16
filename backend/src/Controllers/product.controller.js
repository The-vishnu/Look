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
export const addProductsBulk = async (req, res) => {
    try {
        const insertedProducts = await Product.insertMany(dummyProducts);
        res.status(201).json({ insertedProducts });
        console.log({ insertedProducts });
    } catch (error) {
        console.error("Error in seeding products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const searchProduct = async (req, res) => {
    try {
        const { name } = req.query;
        const product = await Product.find({
            name: { $regex: name, $options: "i" }
        });

        res.status(201).json({product});
        console.log({product});

    } catch (error) {
        console.log(`Error in finding products: ${error}`);
        res.status(401).json({ message: "faild to search" });
    }
}