
import React from "react";

export default function Popup({visible, children}: {visible:boolean, children:any}) {
 



  return (
    visible && (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="mx-4 p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
         {children}
        </div>
      </div>
    )
  );
}
