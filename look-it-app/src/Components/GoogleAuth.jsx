import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleAuth = ({ onSuccess }) => {
  const handleSuccess = async (credentialResponse) => {
    console.log("Google Credential Response:", credentialResponse);

    try {
      // ✅ yahan se ID_TOKEN milta hai (JWT form me, starts with "ey...")
      const token = credentialResponse.credential;

      // send directly to backend
      const res = await axios.post(`${import.meta.env.VITE_API_URL}google`, {
        token, // ye ab id_token hai, not access_token
      });

      console.log("Backend Response:", res.data);
      onSuccess(res.data.user, res.data.token);
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleAuth;
