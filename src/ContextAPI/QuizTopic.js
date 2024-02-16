import { createContext } from "react";

const quizAPI = createContext({
  quizTopic : "30" , 
  setQuizTopic : () => {} , 
  questionNumber : 10 , 
  setQuestionNumber : () => {} , 
  currentQues : 0 , 
  setCurrentQues : () => {}, 
  questions : "" , 
  setQuestions : () => {}
})

export default quizAPI;