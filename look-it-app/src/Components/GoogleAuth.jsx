import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleAuth = ({onSuccess}) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/google`,
          { tokenId: tokenResponse.credential } // ya tokenResponse.id_token depend library
        );
        onSuccess(res.data.user, res.data.token);
      } catch (err) {
        console.error("Google login failed:", err);
      }
    },
  });
  return (
    <>
      <div>
        <button onClick={() => login()} className="google-btn">
          Signup / Login with Google
        </button>
      </div>
    </>
  );
};

export default GoogleAuth;
