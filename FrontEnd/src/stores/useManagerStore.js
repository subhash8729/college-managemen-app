import toast from "react-hot-toast";
import { create } from "zustand";
import axiosInstance from "../functions/axios";
import { useAuthStore } from "./useAuthStore";




export const useManagerStore = create((set, get) => ({
    Upload_info: async (data) => {
        const { setIsLoading } = useAuthStore.getState();
        try {
            data.token = localStorage.getItem("token");
            setIsLoading(true)
            console.log(data);
            const res = await axiosInstance.post("/manager/upload-important-info", data);
            toast.success("Success");
            setIsLoading(false);
            return true;
        } catch (error) {
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
})) 