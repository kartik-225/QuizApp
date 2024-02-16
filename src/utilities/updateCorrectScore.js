function update(){
  let score = Number(localStorage.getItem("correctScore"));
  score++;
  localStorage.setItem("correctScore" , score);
}

export default update;