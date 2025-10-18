import React from "react";
import { FaGoogle, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';



const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Brand & Message */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Look-It</h2>
          <p className="text-gray-400 max-w-sm">
            Discover exclusive fashion trends and make your style statement with Look-It.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <FaGoogle className="cursor-pointer hover:text-white" size={20} />
            <FaLinkedin className="cursor-pointer hover:text-white" size={20} />
            <FaFacebook className="cursor-pointer hover:text-white" size={20} />
            <FaInstagram className="cursor-pointer hover:text-white" size={20} />
            <FaTwitter className="cursor-pointer hover:text-white" size={20} />
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Look-It. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
