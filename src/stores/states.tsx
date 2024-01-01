import { create } from "zustand";


type States = {
  visible: boolean
  showText: boolean
 showSuccess: boolean
showFail: boolean
};

const initialState: States = {
  visible: false,
  showText: false,
  showSuccess: false,
  showFail: false,

  };

interface State extends States {
 
  setVisibility: (Status: boolean) => void;
  setShowText: (Status: boolean) => void;
  setShowSuccess: (Status: boolean) => void;
  setShowFail: (Status: boolean) => void;
  resetState: () => void;

}

export const State = create<State>((set, get) => ({
  ...initialState,
  resetState: () => set(initialState),
  
  setVisibility: (Status)=> { set((state) => ({ visible: Status  })) },
  setShowText: (Status)=> { set((state) => ({ showText: Status  })) },
  setShowSuccess:  (status)=> { set((state) => ({ showSuccess: status  })) },
  setShowFail:  (status)=> { set((state) => ({ showFail: status  })) },
}));

function then(arg0: (res: any) => void) {
  throw new Error("Function not implemented.");
}
