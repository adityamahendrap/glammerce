import { create } from "zustand";
import { IUser } from "../types";

type UserStore = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
