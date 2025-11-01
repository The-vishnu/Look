// ...existing code...
import React, { useEffect, useState } from "react";
import img from "/img3.png";
import { Heart, Share2 } from "lucide-react";
import { useProductStore } from "../Store/useProductStore";
import { Link, Navigate } from "react-router-dom";
import ProductDetails from "../Pages/ProductDetails";

const MiddleComponent = () => {
  const { product, getProduct, isProductLoading } = useProductStore();
  const [more, setMore] = useState(5);
  const fallbackImage = img; // local fallback if API image missing

  const handleClickProduct = (product) => {
    console.log(product)
    // Navigate(`/product/${product.id}`, {state: {product}})
  }

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const canShowMore = Array.isArray(product) && product.length > more;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-6 bg-gray-50 py-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-serif text-2xl mb-1">Browse the Range</h2>
        <p className="text-gray-500 text-sm">
          Check out our exclusive collection
        </p>
      </div>

      {/* Products Grid */}
      {isProductLoading ? (
        <p className="text-gray-500 text-base">Loading products...</p>
      ) : Array.isArray(product) && product.length === 0 ? (
        <p className="text-gray-400 text-base">No products found 😕</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-11/12 max-w-7xl mx-auto">
          {product.slice(0, more).map((itme, index) => {
            const key = itme?._id || itme?.sku || index;
            const src = itme?.images?.[1] || itme?.images?.[0] || fallbackImage;
            const alt = itme?.name || "Product image";
            const priceText =
              typeof itme?.price === "number"
                ? itme.price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })
                : `₹${itme?.price ?? "—"}`;

            return (
              <div
              
                key={key}
                onClick={() => handleClickProduct(key)}
                className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform transition-all duration-300 bg-white"
              >
                {/* Image container */}
                <div className="w-full h-56 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  /> 
                </div>

                {/* Hover overlay (transparent + smooth) */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    className="bg-white/90 hover:bg-white text-black px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="bg-black/70 hover:bg-black text-white px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm"
                  >
                    Buy
                  </button>
                  <div className="flex gap-2 ml-2 items-center justify-center">
                    <div className="rounded-full inline-flex h-5 w-5 items-center justify-center">
                      <Heart className="cursor-pointer rounded-full w-4 h-4 text-white/90" />
                    </div>
                    <div className="rounded-full inline-flex h-5 w-5 items-center justify-center">
                      <Share2 className="cursor-pointer w-4 h-4 text-white/90" />
                    </div>
                    
                  </div>
                </div>

                {/* Product Info with nice background */}
                <div className="bg-gradient-to-t from-white via-gray-50 to-transparent px-3 py-3 text-center">
                  <p className="font-medium text-sm text-gray-800 truncate">
                    {itme?.name}
                  </p>
                  <p className="text-gray-600 text-sm font-semibold">
                    {priceText}
                  </p>
                </div>
              </div>
              
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={() => setMore((prev) => prev + 8)}
        disabled={!canShowMore}
        className={`${
          canShowMore
            ? "bg-black hover:bg-gray-700"
            : "bg-gray-300 cursor-not-allowed"
        } text-white px-4 py-2 rounded-full text-sm font-semibold`}
        aria-label="Show more products"
      >
        {canShowMore ? "Show More" : "No more products"}
      </button>
    </div>
  );
};

export default MiddleComponent;
// ...existing code...
