import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleAuth from "../src/Components/GoogleAuth.jsx";
import SignupForm from "../src/Components/SignupForm.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/Pages/HomePage.jsx";
import ProfilePage from "../src/Pages/ProfilePage.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col no-scrollbar items-center justify-center">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
