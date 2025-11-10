import { create } from "zustand";

export const useAuthStore = create(set=>({
    authUser:null,
    isLoading:false,
    setAuthUser:(value)=>{
       set({authUser:value})
    },
    setIsLoading:(value)=>{set({isLoading:value})},

}))