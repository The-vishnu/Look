import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleAuth from "../src/Components/GoogleAuth.jsx";
import SignupForm from "../src/Components/SignupForm.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <SignupForm />
        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default App;
