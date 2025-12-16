import { create } from "zustand";

export const useUiStore = create((set,get) => ({
    selectedMenu: 0,
    isMenuOpened: false,
    isPopUpOpened:false, //pop-up in admin-> branchManagement -> Edit brach details
    setIsPopUpOpened:(value)=>{
        set({isPopUpOpened:value})
    },
    setIsMenuOpened: (value) => {
        set({ isMenuOpened: value });
    },
    setSelectedMenu: (value) => {
        set({ selectedMenu: value })
    }
}))