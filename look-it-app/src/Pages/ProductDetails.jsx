import React from "react";
import { Star, ShoppingCart, Zap, ShoppingBag } from "lucide-react";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Nike Air Zoom Pegasus 40",
    brand: "Nike",
    price: 8499,
    originalPrice: 9999,
    rating: 4.5,
    reviews: 284,
    description:
      "Experience ultimate comfort and responsiveness with the Nike Air Zoom Pegasus 40. Perfect for daily runs and casual wear with breathable mesh upper and lightweight cushioning.",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f07a1ce-9c17-4b53-bd9c-9fd2c3d3ef61/air-zoom-pegasus-40-road-running-shoes.png",
    inStock: true,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-11/12 p-6 grid md:grid-cols-2 gap-10">
        {/* Left: Image Section */}
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        {/* Right: Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{product.brand}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-gray-500 text-sm ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4">
              <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
              <p className="text-gray-400 line-through text-sm">
                ₹{product.originalPrice}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition">
              <ShoppingBag size={20} /> Buy Now
            </button>
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition">
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition">
              <Zap size={20} /> Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
