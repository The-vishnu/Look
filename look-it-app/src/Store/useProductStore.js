import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useProductStore = create((set, get) => ({
    product: [],
    isProductLoading: false,

    getProduct: async () => {
        set({ isProductLoading: true });
        try {
            const res = await axiosInstance.get(`/search/all/products`);
            const data = await res.data;
            set({ product: data.product || data, isProductLoading: false });
            // console.log(data)
            
        } catch (error) {
            console.log({ message: `failed to fetch ${error}` });
        }
    
    },
}));