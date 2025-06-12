import { create } from "zustand"

export const useLogin = create((set, get) => ({
  username: "",
  password: "",
  setUsername: (userName) => set({ username: userName }),
  getUsername: () => {
    return {
      username: get().username,
    }
  },
}))
