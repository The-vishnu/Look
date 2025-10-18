import React from 'react';
import img from '/img3.png';
import { Heart, Share2 } from 'lucide-react';

const products = [
  { name: 'Stylish Kurta', price: 2000, img },
  { name: 'Elegant Shirt', price: 1800, img },
  { name: 'Casual T-Shirt', price: 1200, img },
  { name: 'Designer Jacket', price: 3500, img },
];

const MiddleComponent = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start gap-10 bg-gray-50 py-10'>
      
      {/* Header */}
      <div className='text-center'>
        <h2 className='font-serif text-3xl mb-2'>Browse the Range</h2>
        <p className='text-gray-500'>Check out our exclusive collection</p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-11/12 max-w-7xl'>
        {products.map((product, index) => (
          <div key={index} className='relative group bg-white rounded-2xl  overflow-hidden'>
            
            {/* Product Image */}
            <img 
              src={product.img} 
              alt={product.name} 
              className='h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105' 
            />

            {/* Hover Buttons & Icons */}
            <div className='absolute inset-0 bg-transparent bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3'>
              <button className='bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-200'>Add to Cart</button>
              <button className='bg-green-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-green-600'>Buy Now</button>
              <div className='flex gap-4 mt-2 text-white'>
                <Heart className='cursor-pointer hover:text-red-500' />
                <Share2 className='cursor-pointer hover:text-blue-400' />
              </div>
            </div>

            {/* Product Info */}
            <div className='p-4 text-center'>
              <p className='font-semibold text-lg'>{product.name}</p>
              <p className='text-gray-600'>₹{product.price}</p>
            </div>

          </div>
        ))}
      </div>
        <span className='bg-amber-300 p-2 rounded-2xl font-semibold'>Show More</span>
    </div>
  );
};

export default MiddleComponent;
