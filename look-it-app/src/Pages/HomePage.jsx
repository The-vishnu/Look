import React, { useEffect, useState } from "react";
import Header from "../Components/HeaderComponent.jsx";
import Middle from "../Components/MiddleComponent.jsx";
import Footer from "../Components/FooterComponent.jsx";
import { useNavigate } from "react-router-dom";
import Google from "/google.png";

const HomePage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignup(true);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      {/* Signup Popup */}
      {showSignup && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center relative animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Join Look-It Now!</h2>
            <p className="text-gray-500 mb-6">
              Sign up quickly with Google and start exploring exclusive products.
            </p>

            <button
              className="flex items-center justify-center gap-2 w-full hover:bg-gray-200 font-semibold py-2 rounded-lg transition"
            >
              <img src={Google} alt="Google" className="h-10 w-15" /> Sign up with Google
            </button>

            <span
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setShowSignup(false)}
            >
              &times;
            </span>
          </div>
        </div>
      )}

      {/* Home Content */}
      <div className="flex flex-col gap-3 no-scrollbar">
        <Header />
        <Middle />
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
