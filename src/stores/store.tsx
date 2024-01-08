import { useMediaQuery } from "react-responsive";
import { create } from "zustand";

type StoreState = {
  visible: boolean;
  showText: boolean;
  status: boolean;
  data: Game
  correctWord: string;
};

const initialState: StoreState = {
  visible: false,
  showText: false,
  status: false,
  data: {
    scrambled: "wordiebox",
    number: [4, 1, 14, 8, 3,9,6,0],
    meaning:
      "an illness, injury, or condition that makes it difficult for someone to do some things that other people do, and that is usually permanent or lasts for a long time.",
    correct: "hand",
    date: '20th Apr,2023',
    status: true,
    point: 4
  },
  correctWord: "hand",
};

interface Store extends StoreState {
  setVisibility: (show: boolean) => void;
  setShowText: (show: boolean) => void;
  setStatus: (status: boolean) => void;
  resetState: () => void;
  setCorrectWord: (word: string) => void;
  getData: (data: Game ) => void;
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
