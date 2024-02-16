import QuizCardStyle from '../styles/QuizCardStyle'
import NextQuesButton from '../styles/NextQuesButton'
import RandomOptionArranger from './RandomOptionArranger';
import { useNavigate } from 'react-router-dom';
import parseHTML from '../utilities/parseHTML'
import updateCorrectScore from '../utilities/updateCorrectScore'

function QuizCard({question , index , currentQues , setCurrentQues , quesNum}){

  const navigator = useNavigate()

  const handleCurrentQues = (quesNum) => {
    if (currentQues == Number(quesNum)-1)
      navigator("/quizReport")
    setCurrentQues(prev => prev + 1);
  }
  
  return(
    <>
      <div className={QuizCardStyle + (index === currentQues ? "block" : "hidden")}>
        <p className="text-lg font-semibold">
          Q.{(index+1) + " " + parseHTML(question.question)}
        </p>
            {
              <RandomOptionArranger correct={question.correct_answer} incorrect={question.incorrect_answers}  />
            }
        <button onClick={() => handleCurrentQues(quesNum)} className={NextQuesButton}>Next question</button>
      </div>
      
    </>
  )
}


export default QuizCard;