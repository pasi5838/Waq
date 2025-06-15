
let currentQuestion = 0;
let lives = 3;

function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].question;
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase().trim();
  const correct = questions[currentQuestion].answer.toLowerCase();
  if (answer === correct) {
    triggerConfetti();
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        alert("Selamat! Kamu telah menyelesaikan semua soal.");
        restartGame();
      }
    }, 3000);
  } else {
    lives--;
    updateLives();
    if (lives === 0) {
      alert("Game Over!");
      restartGame();
    }
  }
}

function updateLives() {
  const heart = "❤️".repeat(lives);
  document.getElementById("lives").innerText = heart;
}

function restartGame() {
  currentQuestion = 0;
  lives = 3;
  updateLives();
  showQuestion();
}

function triggerConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ["#bb0000", "#ffffff"];
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}

window.onload = () => {
  updateLives();
  showQuestion();
};
