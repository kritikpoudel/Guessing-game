const btn = document.getElementById("btn");
const number = document.getElementById("number");
const result = document.getElementById("result");
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
const maxAttempts = 10;
let attempts = 0;
let running = true;

btn.onclick = function () {
    if (!running) {
        result.textContent = "Game Over! Refresh the page to play again.";
        return;
    }

    let guess = Number(number.value); 

    if (isNaN(guess)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (guess < min || guess > max) {
        result.textContent = `Please enter a number between ${min} and ${max}.`;
        return;
    }

    attempts++;

    if (guess < answer) {
        result.textContent = `Too Low! Please try again. Attempts left: ${maxAttempts - attempts}`;
    } else if (guess > answer) {
        result.textContent = `Too High! Please try again. Attempts left: ${maxAttempts - attempts}`;
    } else {
        result.textContent = `🎉 Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
        running = false;
        return;
    }

    if (attempts >= maxAttempts) {
        result.textContent = `Game Over! You've used all ${maxAttempts} attempts. The correct answer was ${answer}.`;
        running = false;
    }
};
