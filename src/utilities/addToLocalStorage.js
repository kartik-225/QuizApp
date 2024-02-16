function add(...args) {
  localStorage.setItem("name" , args[0]);
  localStorage.setItem("questionNumber" , args[1]);
  localStorage.setItem("quizTopic" , args[2]);
}

export default add;