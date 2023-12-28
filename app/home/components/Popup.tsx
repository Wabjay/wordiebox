import React, { useEffect, useState } from "react";

export default function Popup({visible, status, email, updateView}) {
  const [content, setContent] = useState<Feedback>();


  type Feedback = {
    "status": string,
    "title": string,
    "body": string,
}

// eslint-disable-next-line react-hooks/exhaustive-deps
const response: Feedback[] =[ {
    status: 'success',
    title: "Congrats",
    body: `Congratulations, your email address ${email} has been added to our waitlist successfully`
},
{
    status: 'used',
    title: "Ooops",
    body: `${email} has already been registered , thanks for joining our waitlist`
},
{
    status: 'fail',
    title: "Ooops",
    body: `Email not Accepted`
}
]


useEffect(()=>{
    response.map(res => res.status === status &&  setContent(res),
         )
},[response, status, visible])



  return (
    visible && (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
          <p className={`text-48 font-bold font-comic mb-8 ${status === "success" ? 'text-[#00A33F]' :  'text-[#F64300]'}`}>{content?.title}</p>
          <p className="text-20">{content?.body}</p>
          <p
            onClick={()=>updateView(false)}
            className="mt-10 cursor-pointer bg-[#FC0] hover:bg-[#EDBA00]  border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none "
          >
            Go to homepage
          </p>
        </div>
      </div>
    )
  );
}
