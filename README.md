# Guess the Number

A simple browser-based number guessing game built with HTML, CSS, and JavaScript. The player tries to guess a random number between 1 and 100, with feedback after each attempt and a running attempt counter.

## Demo

Open `guess.html` in a browser to play.

## Features

- Random number generation between 1 and 100
- Real-time feedback such as "Too high!" or "Too low!"
- Attempt counter to track progress
- Valid input checking for out-of-range or empty values
- Restart button to play a new round
- Clean, responsive UI

## Project Structure

```text
.
├── guess.html
├── guess.js
├── style.css
├── README.md
```

- `guess.html` – page structure and game UI
- `style.css` – styling for the game layout
- `guess.js` – game logic and interactive behavior

## How to Run

### Option 1: Open directly in a browser

1. Download or clone the project
2. Open `guess.html` in any modern browser

### Option 2: Run a local web server

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/guess.html
```

## Gameplay

1. The game picks a random secret number between 1 and 100.
2. Enter a guess in the input field.
3. The game tells you whether your number is too high, too low, or correct.
4. The attempt count increases after every valid guess.
5. Once you guess correctly, the game ends and you can start a new round.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## License

This project is open source and available for educational and personal use.
