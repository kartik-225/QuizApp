import ErrorStyle from "../styles/ErrorStyle";

function ErrorMessage({ message }){
  return(
    <>
      <div className={ErrorStyle}>{message}</div>
    </>
  )
}


export default ErrorMessage;