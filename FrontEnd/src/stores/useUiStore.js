import { create } from "zustand";

export const useMenuStore = create(set=>({
    selectedMenu:0,
    setSelectedMenu:(value)=>{
        set({selectedMenu:value})
    }
}))