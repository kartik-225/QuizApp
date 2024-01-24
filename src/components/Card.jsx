import card from "../styles/card";
import chatContainer from "../styles/chatContainer";

function Card(){
  return(
    <>
      <div className={card}>
        <p className="text-3xl font-semibold text-gray-700 text-center">KartikAI</p>
        <div className={chatContainer}>
            
        </div>
      </div>
    </>
  )
}


export default Card;