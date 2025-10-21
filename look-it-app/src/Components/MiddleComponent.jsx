// ...existing code...
import React, { useEffect, useState } from "react";
import img from "/img3.png";
import { Heart, Share2 } from "lucide-react";
import { useProductStore } from "../Store/useProductStore";

const MiddleComponent = () => {
  const { product, getProduct, isProductLoading } = useProductStore();
  const [more, setMore] = useState(8);
  const fallbackImage = img; // local fallback if API image missing

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const canShowMore = Array.isArray(product) && product.length > more;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-6 bg-gray-50 py-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-serif text-2xl mb-1">Browse the Range</h2>
        <p className="text-gray-500 text-sm">Check out our exclusive collection</p>
      </div>

      {/* Products Grid */}
      {isProductLoading ? (
        <p className="text-gray-500 text-base">Loading products...</p>
      ) : Array.isArray(product) && product.length === 0 ? (
        <p className="text-gray-400 text-base">No products found 😕</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 max-w-7xl">
          {product.slice(0, more).map((itme, index) => {
            const key = itme?._id || itme?.sku || index;
            const src = itme?.images?.[1] || itme?.images?.[0] || fallbackImage;
            const alt = itme?.name || "Product image";
            const priceText =
              typeof itme?.price === "number"
                ? itme.price.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })
                : `₹${itme?.price ?? "—"}`;

            return (
              <div
                key={key}
                className="relative w-full items-center justify-center group h-60 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform transition-all duration-300"
              >
                {/* Image container keeps consistent height so object-cover works */}
                <div className="w-60 h-40 bg-amber-300 justify-center align-middle items-center sm:h-44 md:h-44 overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-35 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay (white with 30% opacity) */}
                <div className="absolute inset-0 bg-white/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    type="button"
                    aria-label={`Add ${itme?.name ?? "product"} to cart`}
                    className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-opacity-90"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    aria-label={`Buy ${itme?.name ?? "product"} now`}
                    className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100"
                  >
                    Buy
                  </button>
                  <div className="flex gap-2 ml-2">
                    <Heart className="cursor-pointer w-4 h-4 text-black/80" aria-hidden="true" />
                    <Share2 className="cursor-pointer w-4 h-4 text-black/80" aria-hidden="true" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/90 to-transparent text-gray-900 px-4 py-3 backdrop-blur-sm">
                  <p className="font-medium text-sm line-clamp-2 text-gray-800">{itme?.name}</p>
                  <p className="text-gray-600 text-sm mt-1 font-semibold">{priceText}</p>
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
          canShowMore ? "bg-black hover:bg-gray-700" : "bg-gray-300 cursor-not-allowed"
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