import { useContext, useState, useEffect } from "react";
import QuizTopic from '../ContextAPI/QuizTopic'
import QuizCard from "./QuizCard";

function Quiz(){

  const [questions , setQuestions] = useState({
    results : []
  }); 
  const [questionsLoaded , setQuestionsLoaded] = useState(false);
  const [currentQues, setCurrentQues] = useState(0)
  
  useEffect(() => {
    const ques = JSON.parse(localStorage.getItem("questions"));
    setQuestions(ques);
    setQuestionsLoaded(true);
  },[])
  
  return(
    <>
      <div className="container flex">
      {questions.results.map((ques, index) => (
        <QuizCard question={ques} index={index} currentQues={currentQues} setCurrentQues={setCurrentQues} key={index} quesNum={questions.results.length} />
      ))}
    </div>
    </>
  )
}


export default Quiz;