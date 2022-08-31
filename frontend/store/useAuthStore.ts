import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../types/userTypes";

const authStore = (set: any) => ({
  isAuthenticated: false,
  isAdministrator: false,
  userAccount: {} as User,
  setUserAccount: async (user: User) => {
    set((state: any) => ({ userAccount: user, isAuthenticated: true }));
  },
  setAdminAccount: async (user: User) => {
    set((state: any) => ({
      userAccount: user,
      isAuthenticated: true,
      isAdministrator: true,
    }));
  },
  logoutUser: async () => {
    set((state: any) => ({ userAccount: {} as User, isAuthenticated: false }));
  },
  logoutAdmin: async () => {
    set((state: any) => ({
      userAccount: {} as User,
      isAuthenticated: false,
      isAdministrator: false,
    }));
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
