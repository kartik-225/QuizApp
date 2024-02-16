import { useState, useRef, useEffect, useContext } from 'react'
import './css/tailwind'
import QuizCard from './components/QuizCard';
import ques from "../dummyData"
import QuizTopic from './ContextAPI/QuizTopic'
import RegistrationCard from './components/RegistrationCard';
import Quiz  from './components/Quiz';

function App() {

  const [questions, setQuestions] = useState({
    results : [0,0,0]
  });
  
  const [quizTopic , setQuizTopic] = useState("30");
  const [questionNumber , setQuestionNumber] = useState(10)

  return (
    <>
      <QuizTopic.Provider value = {{quizTopic , setQuizTopic , questionNumber , setQuestionNumber , currentQues , setCurrentQues}}>
        <Quiz currentQues={currentQues} setCurrentQues={setCurrentQues} />
        <RegistrationCard />
      </QuizTopic.Provider>
    </>
  )
}

export default App
