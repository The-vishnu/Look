// ...existing code...
import React, { useEffect, useState, useRef } from "react";
import {
  Star,
  ShoppingCart,
  Zap,
  ShoppingBag,
  Sparkles,
  ImageIcon,
  Loader2,
  Plus,
} from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import { useProductStore } from "../Store/useProductStore";


const ProductDetails = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const previewRef = useRef(null)
  const { id } = useParams();
  const location = useLocation();
  const stateProduct = location.state?.product;

  const { product: products, getProduct } = useProductStore();

  const handleImageUpload = (e) => {
    const file = e.target.files && e.target.files[0];

    if(!file) return;

    const url = URL.createObjectURL(file);

    if(previewRef.current) URL.createObjectURL(file);
    previewRef.current = url;
    setImage(url)    

  };

    useEffect(() => {
    // cleanup preview URL on unmount
    return () => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
        previewRef.current = null;
      }
    };
  }, []);

  const handleGenerate = async () => {
    
    if (!prompt.trim()) return alert("Please enter a prompt first!");
    setLoading(true);

    try {
        
      // 🔹 For now — dummy delay and static image
      await new Promise((res) => setTimeout(res, 2000));
      setImage(
        `https://source.unsplash.com/800x600/?${encodeURIComponent(prompt)}`
      );
    } catch (err) {
      console.error("Error generating image:", err);
      alert("Failed to generate image.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // ensure products loaded so we can find by id if state not provided
    if ((!products || products.length === 0) && getProduct) getProduct();
  }, [getProduct, products]);

  // try state first, then lookup in store, then fallback sample

  const product = stateProduct ||
    (Array.isArray(products) &&
      products.find((p) => String(p._id ?? p.id ?? p.sku) === String(id))) || {
      id: id ?? 1,
      name: "Product not found",
      brand: "",
      price: 0,
      originalPrice: 0,
      rating: 0,
      reviews: 0,
      description: "Product details not available.",
      image: "/img3.png",
      inStock: false,
    };
  const productImage = product?.images?.[0] || product?.image || img;
  return (
    // ...existing JSX unchanged but using the 'product' above ...
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-11/12 p-6 grid md:grid-cols-2 gap-10">
          {/* Left: Image Section */}
          <div className="flex justify-center items-center bg-gray-100 rounded-xl p-4">
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-auto max-h-[400px] object-contain"
            />
          </div>

          {/* Right: Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
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
                <p className="text-3xl font-bold text-gray-900">
                  ₹{product.price}
                </p>
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
              <button className="flex-1 bg-black hover:bg-gray-500 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition">
                <ShoppingBag size={20} /> Buy Now
              </button>
              <button className="flex-1 bg-black hover:bg-gray-500 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="flex-1 bg-black hover:bg-gray-500 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition">
                <Zap size={20} /> Try Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Sparkles className="w-7 h-7 text-yellow-500" />
            AI Image Generator
          </h1>
          <p className="text-gray-500 mt-2 text-sm">try before you Buy ✨</p>
        </div>

        {/* Input Box */}
        <div className="w-full max-w-4xl flex items-center gap-2 bg-white shadow-md rounded-full px-5 py-3 border border-gray-200">
          {!image ? (<label htmlFor="uploadImage">
            <Plus className="w-7 h-7 text-blsck hover:cursor-pointer" />
          </label>) : (<div
    className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 shadow-md animate-scaleIn"
  >
    <img
      src={image}
      alt="Uploaded preview"
      className="w-full h-full object-cover"
    />
  </div>)}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="uploadImage"
          />
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A futuristic smartwatch on a marble table"
            className="flex-1 outline-none bg-transparent text-gray-700 text-base placeholder:text-gray-400"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`${
              loading ? "bg-gray-300" : "bg-black hover:bg-gray-800"
            } text-white font-semibold px-5 py-2 rounded-full transition duration-200`}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Generate"
            )}
          </button>
        </div>

        {/* Generated Image */}
        <div className="mt-10 w-full max-w-3xl flex items-center justify-center">
          {loading ? (
            <p className="text-gray-500 text-sm animate-pulse">
              Generating your masterpiece... 🪄
            </p>
          ) : image ? (
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={image}
                alt="Generated"
                className="w-full h-[400px] object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <ImageIcon className="w-16 h-16 mb-3" />
              <p className="text-sm">
                Your AI-generated image will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
// ...existing code...
