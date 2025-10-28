import React, { useState } from "react";
import { ShoppingBag, Image as ImageIcon, ShoppingCart, Grid3X3 } from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  // Dummy user stats (baad me backend se connect karenge)
  const user = {
    name: "Boss Kumar",
    profileImg: "/img1.png",
    postsCount: 8,
    galleryCount: 14,
    orderCount: 5,
    cartCount: 3,
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-2xl w-11/12 max-w-4xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={user.profileImg}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-sm"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 text-sm mt-1">Loyal Member 🛍️</p>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-6 mt-4 text-sm text-gray-700">
            <div className="text-center">
              <p className="font-bold">{user.postsCount}</p>
              <p className="text-gray-500 font-semibold text-[16px]">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.galleryCount}</p>
              <p className="text-gray-500 font-semibold text-[16px]">Gallery</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.orderCount}</p>
              <p className="text-gray-500 font-semibold text-[16px]">Orders</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.cartCount}</p>
              <p className="text-gray-500 font-semibold text-[16px]">Cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-11/12 max-w-4xl mt-8">
        <div className="flex justify-around border-b border-gray-300 pb-2">
          <button
            className={`flex items-center gap-2 px-3 py-1 font-semibold ${
              activeTab === "posts" ? "text-black border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            <Grid3X3 className="w-4 h-4" /> Posts
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-1 font-semibold ${
              activeTab === "gallery" ? "text-black border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            <ImageIcon className="w-4 h-4" /> Gallery
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-1 font-semibold ${
              activeTab === "orders" ? "text-black border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            <ShoppingBag className="w-4 h-4" /> Orders
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-1 font-semibold ${
              activeTab === "cart" ? "text-black border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            <ShoppingCart className="w-4 h-4" /> Cart
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6 min-h-[300px] flex items-center justify-center text-gray-500">
          {activeTab === "posts" && <p>No posts yet 📝</p>}
          {activeTab === "gallery" && <p>No gallery images yet 📸</p>}
          {activeTab === "orders" && <p>No orders placed yet 🛒</p>}
          {activeTab === "cart" && <p>Your cart is empty 🧺</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
