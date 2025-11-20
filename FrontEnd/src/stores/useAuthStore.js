import toast from "react-hot-toast";
import { create } from "zustand";
import axiosInstance from "../functions/axios";

export const useAuthStore = create((set,get)=>({
    authUser:null,
    isLoading:false,
    setAuthUser:(value)=>{
       set({authUser:value});
    },
    setIsLoading:(value)=>{set({isLoading:value})},

    login :async (formData)=>{
        const {setIsLoading, setAuthUser} = get();
        //setting loading to true
        //sending data to server
        //getting response
        //setting loading to false
        //setting authUser
        //redirecting to page
    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      setIsLoading(false)
      setAuthUser(res.data);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);
      toast("login success");
      return res.data.role;
    } catch (error) {
        setIsLoading(false)
        console.log(error);
        toast(error?.response?.data?.message || "Something went wrong");
        return false;
    }
    

}
}))