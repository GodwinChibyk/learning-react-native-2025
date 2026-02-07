import { create } from "zustand";

interface HomeScreenStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useHomeScreenStore = create<HomeScreenStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
