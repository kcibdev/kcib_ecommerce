import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../types/userTypes";

const authStore = (set: any) => ({
  isAuthenticated: false,
  userAccount: {},
  setUserAccount: async (user: User) => {
    set((state: any) => ({ userAccount: user, isAuthenticated: true }));
  },
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "authStore",
    })
  )
);

export default useAuthStore;