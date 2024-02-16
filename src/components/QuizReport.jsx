import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizReport() {

  const [userName, setUserName] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState("");
  const [totalQues, setTotalQues] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setCorrectAnswers(Number(localStorage.getItem("correctScore")));
    const ques = JSON.parse(localStorage.getItem("questions")).results;
    setTotalQues(ques.length);
  }, [])

  return (
    <>
      <div className="container w-[30rem] h-[30rem] mt-10 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-xl shadow-xl pt-5 px-5">
        <div className="text-3xl font-semibold text-gray-700 text-center">Hey {userName}! Your Report</div>
        <div className="container bg-sky-100 mt-5 p-5 border-[2px] border-indigo-300 rounded-xl">
          <div className="container text-xl text-neutral-800 bg-green-400 px-5 py-2 rounded-lg">
            <p>Correct Answers : {correctAnswers}</p>
          </div>
          <div className="container mt-5 text-xl text-neutral-800 bg-red-400 px-5 py-2 rounded-lg">
            <p>Wrong/Skipped Answers : {totalQues - correctAnswers}</p>
          </div>
        </div>
        <div className="container bg-sky-100 mt-5 p-5 border-[2px] border-indigo-300 rounded-xl">
          <div className="container text-xl text-neutral-800">
            <p>Accuracy : {((correctAnswers/totalQues)*100).toFixed(2)}%</p>
          </div>
          <div className="container mt-5 text-xl text-neutral-800">
            <p>Score : {`${correctAnswers}/${totalQues}`}</p>
          </div>
        </div>
        <div className="container">
          <Link to="/">
            <button className="w-full bg-indigo-700 text-white py-2 text-lg mt-5 rounded-md transition-all duration-[200ms] hover:scale-[1.02] hover:bg-white hover:border-[2px] hover:border-indigo-700 hover:text-black active:bg-indigo-600 active:text-white ">Take another Quiz</button>
          </Link>
        </div>
      </div>
    </>
  )
}


export default QuizReport;