import React from "react";
import img3 from "/img3.png";

const HeaderComponent = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${img3})` }}
    >

      {/* Content box */}
      <div className="relative z-0 text-white ml-16 max-w-md bg-black/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
        <span className="text-sm uppercase tracking-widest text-amber-400 font-semibold">
          New Arrival
        </span>

        <h1 className="text-4xl font-bold mt-2 mb-3 leading-tight">
          Discover our New Collection
        </h1>

        <p className="text-gray-200 mb-5 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          inventore expedita nihil possimus.
        </p>

        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-200">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeaderComponent;
