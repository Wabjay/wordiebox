import { useMediaQuery } from "react-responsive";
import { create } from "zustand";

type StoreState = {
  visible: boolean;
  showText: boolean;
  status: boolean;
  data: {
    scrambled: string;
    number: number[];
    meaning: string;
    correct: string;
  };
  correctWord: string;
};

const initialState: StoreState = {
  visible: false,
  showText: false,
  status: false,
  data: {
    scrambled: "icdpanha",
    number: [9, 3, 4, 16, 1, 14, 8, 1],
    meaning:
      "an illness, injury, or condition that makes it difficult for someone to do some things that other people do, and that is usually permanent or lasts for a long time.",
    correct: "handicap",
  },
  correctWord: "handicap",
};

interface Store extends StoreState {
  setVisibility: (show: boolean) => void;
  setShowText: (show: boolean) => void;
  setStatus: (status: boolean) => void;
  resetState: () => void;
  setCorrectWord: (word: string) => void;
  getData: (data: {
    scrambled: string;
    meaning: string;
    correct: string;
    number: number[];
  }) => void;
}

export const store = create<Store>((set, get) => ({
  ...initialState,
  resetState: () => set(initialState),

  setVisibility: (show) => {
    set((state) => ({ visible: show }));
  },
  setShowText: (show) => {
    set((state) => ({ showText: show }));
  },
  setStatus: (status) => {
    set((state) => ({ status: status }));
  },

  getData: (data) => {
    set((state) => ({ data: data }));
  },
  setCorrectWord: (word) => {
    set((state) => ({ correctWord: word }));
  },
}));

function then(arg0: (res: any) => void) {
  throw new Error("Function not implemented.");
}
