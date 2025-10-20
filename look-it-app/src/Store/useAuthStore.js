import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLogging: false,
    isAuthChecking: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance(`/auth/checkAuth`);
            const data = await req.data;

            console.log({ message: `Auth checking Responce: ${data}` });
        } catch (error) {
            console.log("Auth check failed:", error);
            set({ authUser: null });
        } finally {
            set({ isAuthChecking: false });
        }
    },

    signup: async () => {
        try {
            const res = await axiosInstance(`/auth/signup`);
            const user = req.user;
            console.log({ message: `user data: ${user}` });
            set({ isSigningUp: true });

        } catch (error) {
            console.log({ message: `Sign up failed: ${error}` });
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async () => {
        try {
            const res = await axiosInstance(`/auth/login`);
            const user = req.user;
            console.log({ message: `user data: ${user}` });
            set({ isLogging: true });

        } catch (error) {
            console.log({ message: `Login up failed: ${error}` });
        } finally {
            set({ isLogging: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance(`/auth/logout`);
            set({ authUser: null });
        } catch (error) {
            console.log({ message: `logout failed: ${error}` });
        } finally {
            set({ isLogging: false });
        }
    }


}))