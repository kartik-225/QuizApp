import OptionStyle from '../styles/OptionStyle'
import { useState, useEffect } from 'react';
import updateCorrectScore from '../utilities/updateCorrectScore'

function RandomOptionArranger({correct , incorrect}){

  const [options , setOptions] = useState([correct , ...incorrect])
  const [selectedOption , setSelectedOption] = useState("")
  const [isClicked , setIsClicked] = useState(false)
  const [showCorrect , setShowCorrect] = useState(-1)
  
  const correctOption = correct;

  useEffect(() => {
    const newOptions = [...options]
    for(let i = 0 ; i < newOptions.length ; i++){
      let index = Math.floor(Math.random()*4);
      [newOptions[i] , newOptions[index]] = [newOptions[index] , newOptions[i]];
    }
    setOptions(newOptions)
  },[])


  const optionClicked = (index) => {
    if(options[index] === correctOption && isClicked === false){
      setSelectedOption(prev => options.indexOf(correct))
      setShowCorrect(options.indexOf(correct));
      updateCorrectScore()
      setIsClicked(true);
    }else if (options[index] !== correctOption && isClicked === false){
      setShowCorrect(options.indexOf(correct));
      setSelectedOption(prev => index);
      setIsClicked(true)
    }
  } 

  return(
    <>
       {options.map((i, index) => (
        <div
          onClick={() => optionClicked(index)}
          className={OptionStyle +
            (
              (showCorrect === index)  // Highlight correct option when a wrong option is clicked
                ? "bg-green-200 hover:bg-green-200 border-[2px] border-green-500" :
                (selectedOption === index ? `bg-red-200 hover:bg-red-200 border-[2px] border-red-500` : "")
            )
          }
          key={index}>
          {String().charAt(98) + i}
        </div>
      ))}
    </>
  )
}


export default RandomOptionArranger;