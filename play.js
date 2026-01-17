import { rl } from "./rl.js";
import {
    logInvalidGuess,
    logCorrectGuess,
    logWrongGuess,
    logNoMoreAttempts,
    logInvalidPlayAgain
} from "./log.js";

export async function play(chances, numberToGuess, min, max) {
    let attempt = 0;
    while (attempt < chances) {
        const guess = await promptGuess();
        const guessNumber = Number(guess);
        if (isGuessValid(guessNumber, min, max) == false) {
            logInvalidGuess();
            continue;
        } else {
            if (guessNumber === numberToGuess) {
                logCorrectGuess(attempt);
                return ;
            } else {
                logWrongGuess(guessNumber, numberToGuess);
            }
        }
        attempt++;
    }
    logNoMoreAttempts();
}

export async function playAgain() {
    const playAgain = await promptPlayAgain();
    if (isPlayAgainValid(playAgain) == false) {
        logInvalidPlayAgain();
        await playAgain();
    }
    return (playAgain == 'y');
}

async function promptGuess() {
    const guess = await rl.question("Enter your guess: ");
    return guess;
}

async function promptPlayAgain() {
    const playAgain = await rl.question("Do you want to play again? (y/n) ");
    return playAgain;
}

function isGuessValid(number, min, max) {
    if (isNaN(number) || number < min || number > max) {
        return false;
    } else {
        return true;
    }
}

function isPlayAgainValid(playAgain) {
    return (playAgain == 'y' || playAgain == 'n');
}