import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLogging: false,
  isAuthChecking: true,

  // ✅ Check Auth
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/checkAuth", {
        method: "GET",
        credentials: "include",
      });
      console.log("✅ Auth response:", res.data);

      if (res.data?.success) {
        set({ authUser: res.data.user, isLogging: true });
      } else {
        set({ authUser: null, isLogging: false });
      }
    } catch (error) {
      console.log("❌ Auth check failed:", error);
      set({ authUser: null, isLogging: false });
    } finally {
      set({ isAuthChecking: false });
    }
  },

  // ✅ Signup
  signup: async (formData) => {
    try {
      set({ isSigningUp: true });
      const res = await axiosInstance.post("/auth/signup", formData, {
        withCredentials: true,
      });
      console.log("Signup success:", res.data);
      if (res.data?.user) {
        set({ authUser: res.data.user });
      }
    } catch (error) {
      console.log("❌ Signup failed:", error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  // ✅ Login
  login: async (credentials) => {
    try {
      set({ isLogging: true });
      const res = await axiosInstance.post("/auth/login", credentials, {
        withCredentials: true,
      });
      console.log("Login success:", res.data);
      if (res.data?.user) {
        set({ authUser: res.data.user });
      }
    } catch (error) {
      console.log("❌ Login failed:", error);
    } finally {
      set({ isLogging: false });
    }
  },

  // ✅ Logout
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout", {}, { withCredentials: true });
      console.log("Logged out successfully");
      set({ authUser: null, isLogging: false });
    } catch (error) {
      console.log("❌ Logout failed:", error);
    }
  },
}));
