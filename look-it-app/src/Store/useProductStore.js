import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useProductStore = create((set) => ({
  product: [],
  isProductLoading: false,

  getProduct: async () => {
    set({ isProductLoading: true });
    try {
      const res = await axiosInstance.get("/search/all/products");
      const data = res.data.products || []; // <- fix
      set({ product: data, isProductLoading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ product: [], isProductLoading: false });
    }
  },
}));
