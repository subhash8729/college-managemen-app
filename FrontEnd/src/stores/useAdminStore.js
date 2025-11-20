import toast from "react-hot-toast";
import { create } from "zustand";
import axiosInstance from "../functions/axios";
import { useAuthStore } from "./useAuthStore";




export const useAdminStore = create((set, get) => ({
    classes: [],
    setClasses: (value) => {
        set({ classes: value })
    },
    add_class: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState();
            data.token = localStorage.getItem("token");
            setIsLoading(true);
            console.log(data);
            const res = await axiosInstance.post("/admin/add-class", data);
            toast.success("Success");
            setIsLoading(false);
            return true;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    fetchClasses: async () => {
        try {
            //setting loading to on
            //making a server req to get all classes names
            //setting class data as state
            //returning as array
            const { setClasses } = get();
            const { setIsLoading } = useAuthStore.getState();
            setIsLoading(true)
            const res = await axiosInstance.post("/admin/get-classes", { token: localStorage.getItem('token') });
            setClasses(res?.data || null);
            setIsLoading(false);
            return res;

        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.log(error)
            toast.error("Error while fetching classes");
            setIsLoading(false)
            return false;
        }
    }
})) 