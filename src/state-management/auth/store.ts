import { create } from "zustand";

interface AuthStore {
  user: string;
  Login: (userName: string) => void;
  Logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  Login: (userName) => set(() => ({ user: userName })),
  Logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
