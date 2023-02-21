import { create } from 'zustand';

export interface formState {
  step: number;
  setStep: (step: number) => void;
}

export const useApp = create<formState>((set) => ({
  step: 0,
  setStep: (step) => set((state) => ({ step })),
}));
