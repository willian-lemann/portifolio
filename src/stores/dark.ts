import { create } from "zustand";

export const useDarkMode = create<{ darkMode: boolean; toggle(): void }>()(
  (set) => ({
    darkMode: false,
    toggle: () => set((state) => ({ darkMode: !state.darkMode })),
  })
);
