import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  email: string;
  password: string;
} | null;

type SessionStore = {
  session: boolean;
  user: User;
  logIn: (user: User) => void;
  logOut: () => void;
};

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      session: false,
      user: null,
      logIn: (user) => set({ session: true, user }), // 🚀 Garante que só salva strings
      logOut: () => set({ session: false, user: null }),
    }),
    {
      name: "session-storage", // 🔹 Salva no localStorage
      partialize: (state) => ({ session: state.session, user: state.user }), // 🔹 Evita salvar funções
    }
  )
);