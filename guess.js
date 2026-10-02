const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let isRunning = true;

const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptCount = document.getElementById("attemptCount");
const restartBtn = document.getElementById("restartBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isRunning) return;

  const guess = Number(input.value);

  if (isNaN(guess) || input.value.trim() === "") {
    showMessage("Please enter a valid input", "error");
    return;
  }

  if (guess < minNum || guess > maxNum) {
    showMessage(`Number must be between ${minNum} and ${maxNum}`, "error");
    return;
  }

  attempts++;
  attemptCount.textContent = attempts;

  if (guess > answer) {
    showMessage("Too high! Try again.", "high");
  } else if (guess < answer) {
    showMessage("Too low! Try again.", "low");
  } else {
    showMessage(`Correct! It took you ${attempts} attempts.`, "success");
    endGame();
  }

  input.value = "";
  input.focus();
});

function showMessage(text, typeClass) {
  message.textContent = text;
  message.className = typeClass;
}

function endGame() {
  isRunning = false;
  input.disabled = true;
  submitBtn.disabled = true;
  restartBtn.classList.remove("hidden");
}

restartBtn.addEventListener("click", () => {
  answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  attempts = 0;
  isRunning = true;
  attemptCount.textContent = "0";
  message.textContent = "";
  message.className = "";
  input.disabled = false;
  submitBtn.disabled = false;
  restartBtn.classList.add("hidden");
  input.value = "";
  input.focus();
});