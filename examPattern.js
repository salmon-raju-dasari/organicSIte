function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "rajudasari" && password === "123456") {
    document.getElementById("exam-sec").style.display = "block";
    document.getElementById("login-sec").style.display = "none";
  } else {
    alert("student credentials not found");
  }
}
function submit() {
  let correctAnswers = {
    q1: "Brendan Eich",
    q2: "let x = 10",
  };

  let totalQuestions = Object.keys(correctAnswers).length;
  let score = 0;

  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;

  if (q1 === correctAnswers.q1) {
    score++;
  }
  if (q2 === correctAnswers.q2) {
    score++;
  }
  document.getElementById(
    "result"
  ).innerText = `You scored ${score} out of ${totalQuestions}`;
  console.log(score);
}
