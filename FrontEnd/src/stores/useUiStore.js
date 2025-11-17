import { create } from "zustand";

export const useUiStore = create((set,get) => ({
    selectedMenu: 0,
    isMenuOpened: false,
    setIsMenuOpened: (value) => {
        set({ isMenuOpened: value });
    },
    setSelectedMenu: (value) => {
        set({ selectedMenu: value })
    }
}))