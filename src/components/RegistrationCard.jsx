import { FormStyle , InputStyle } from '../styles/RegistrationFormStyle'
import { useContext, useState, useEffect } from 'react';
import QuizTopic from '../ContextAPI/QuizTopic'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

function RegistrationCard(){

  const [questionNumber , setQuestionNumber] = useState(10);
  const [quizTopic , setQuizTopic] = useState("30")
  const [name , setName] = useState("");

  const [isLoading , setIsLoading] = useState(false);

  // Errors State
  const [nameError , setNameError] = useState(false);
  const [questionNumberError , setQuestionNumberError] = useState(false)
  const [networkError , setNetworkError] = useState("");

  const navigator = useNavigate()

  const handleTopicChange = (e) => {
    setQuizTopic(prev => e.target.value);
    localStorage.setItem("quizTopic" , e.target.value);
  }
  const handleRegistration = async() => {
    if (name.length >= 3) 
      setNameError(false)
    if (questionNumber <= 50) 
      setQuestionNumberError(false)
    if(name.length < 3){
      setNameError(true);
      return;
    }
    else if(questionNumber > 50){
      setQuestionNumberError(true);
      return;
    }

    try{
      setIsLoading(true);
      let data = await fetch(`https://opentdb.com/api.php?amount=${questionNumber}&category=${quizTopic}&type=multiple`);
      data = await data.json();
      localStorage.setItem("questions" , JSON.stringify(data))

      // Start the Quiz
      localStorage.setItem("correctScore" , 0)
      localStorage.setItem("name" , name)
      navigator("/quiz")
      setIsLoading(false)
    }catch{
      setNetworkError(true)
      setIsLoading(false);
      console.log("Error aagaya Promise Me");
    }
    
    
  }
  
  return(
    <>
      {nameError && <ErrorMessage message="Name must be at least 3 character long" />}
      {questionNumberError && <ErrorMessage message="Maximum 50 Questions Allowed" />}
      {networkError && <ErrorMessage message="Network Issue , make sure you are connected to stable network" />}

      <div className={FormStyle}>
        <p className="mt-5 text-2xl font-semibold text-center">
          Register for Quiz 🥳
        </p>

        <div className="container mt-5">
          <label htmlFor="name" className="text-xl font-semibold">Full name</label><br/>
          <input
            onChange = {(e) => setName(prev => e.target.value)}
            value = {name} 
            placeholder="Enter Full Name ...."
            type="text" name="name" id="name" className={InputStyle}/>
        </div>
        <div className="container mt-5">
          <label htmlFor="name" className="text-xl font-semibold">Quiz Category</label><br/>
          <select 
            onChange={handleTopicChange}
            name="category" id="category" className={InputStyle} value={quizTopic}>
            <option value="21">Sports</option>
            <option value="30">Technology</option>
            <option value="18">Science</option>
            <option value="11">Entertainment</option>
            <option value="23">History</option>
            <option value="22">Geography</option>
            <option value="9">General Knowledge</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="31">Anime</option>
          </select>
        </div>
        <div className="container mt-5">
          <label htmlFor="name" className="text-xl font-semibold">Number of Questions</label><br/>
          <input 
            value = {questionNumber}
            onChange = {(e) => setQuestionNumber(prev => e.target.value)}
            placeholder="Enter Number of Questions ..."
            type="number" name="name" id="name" className={InputStyle}/>
            <button className={`
                    w-full h-[3rem] mt-10 py-2
                    bg-indigo-600 text-white
                    text-lg font-semibold 
                    rounded-lg
                    transition-all duration-[400ms]
                    hover:shadow-xl hover:scale-[1.02]
                    active:bg-cyan-600 active:border-[3px] active:border-orange-500
            `}
            onClick = {handleRegistration}
            >{isLoading ? "Starting your Quiz...😁" : "Start Quiz 🤩"}</button>
        </div>
        
      </div>
    </>
  )
}


export default RegistrationCard;