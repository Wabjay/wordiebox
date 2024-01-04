import { store } from "@/src/stores/store"
import { useEffect, useState } from "react"
import OTPInput from "react-otp-input"

const Answer = ({length}) => {
    const [otp, setOtp] = useState('')
    const {setCorrectWord} = store()


    useEffect(()=>{
      setCorrectWord(otp)
    },[otp])
  return (
    <div className="my-10">
    <h5 className="font-semibold text-12 tablet:text-14 laptop:text-16 mb-2">Enter Word Here</h5>
    <OTPInput
    value={otp}
    onChange={setOtp}
    numInputs={length}
    isInputNum={true}
    renderInput={(props) => <input {...props} />}
    // shouldAutoFocus
    containerStyle={`mx-auto text-center !w-fit flex !gap-3 !tablet:gap-4`}
    inputStyle={`capitalize outline-none text-center p-2  !w-8 !h-8 laptop:!h-11 border-[#1C1C1C] border shadow-darkbox flex items-center justify-center text-12 tablet:text-16 font-semibold `}
    // inputStyle={`capitalize outline-none text-center p-2 !w-fit !h-fit max-!w-8 max-!h-8 laptop:!h-11 border-[#1C1C1C] border shadow-darkbox flex items-center justify-center text-12 tablet:text-16 font-semibold `}
    />
    </div>
  )
}
export default Answer