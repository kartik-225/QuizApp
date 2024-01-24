import { useState, useRef } from 'react'
import './css/tailwind'
import Card from './components/Card';

function App() {

  const inputRefs = [useRef(), useRef(), useRef(), useRef()]
  const [otp , setOtp] = useState(null);
  const btnRef = useRef();

  const handleChange = (e, index) => {
    if (index == 3){
      btnRef.current.click()
      inputRefs[3].current.blur()
      return
    }
    console.log("Entered");
    inputRefs[index + 1].current.focus()
  }

  return (
    <>
      {/* <Card/> */}
      <div className="w-[50%] mx-auto mt-10 text-center">
        {
          inputRefs.map((refs, i) => (
            <input
              key={i}
              ref={refs}
              onChange={(e) => handleChange(e, i)}
              type="text" className={`
                          border-[2px] border-sky-400 rounded-xl 
                          text-center w-[3rem] px-[0.5rem] py-[0.5rem] mx-5 
                          font-semibold outline-none
                          transition-all duration-[200ms]
                          focus:scale-[1.1] focus:shadow-xl 
              `} />
          ))
        }
        <br/>
        <button 
          onClick={() => console.log("Button Clicked")}
          ref={btnRef}
              className={`
                        w-[25%] mt-5 py-2 text-center
                        bg-cyan-400 rounded-xl font-semibold text-xl 
                        shadow-xl
                        hover:scale-105 hover:bg-indigo-300 hover:shadow-2xl 
                        active:bg-indigo-600 active:text-white 
                        transition-all duration-[200ms]
            `}>Verify</button>
      </div>
    </>
  )
}

export default App
