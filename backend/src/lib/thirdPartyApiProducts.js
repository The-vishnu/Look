import axios from 'axios';
import Product from '../Models/product.models.js';

export const fetchAndSeedProducts = async () => {
    const { data } = await axios(`https://fakestoreapi.com/products`);

    try {
        const insertProduct = data.map((item, index) => ({
            name: item.title,
            sku: `SKU-${index + 1}-${Math.floor(Math.random() * 10000)}`,
            description: item.description,
            price: item.price,
            images: [
                item.image, // original image
  ], // array me rakha safe ke liye
            rating: item.rating?.rate || 0,
            category: item.category,
        }));

        await Product.insertMany(insertProduct);
        console.log("✅ Products successfully seeded!");
        if (data.length) console.log("Fetched product image:", data[0].image);

    } catch (error) {
        console.log("failed to insert: ", error);
    }

}