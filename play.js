import { rl } from "./rl.js";
import {
    logInvalidGuess,
    logCorrectGuess,
    logWrongGuess,
    logNoMoreAttempts
} from "./log.js";

export async function play(chances, numberToGuess, min, max) {
    let attempt = 1;
    while (attempt < chances) {
        const guess = await promptGuess();
        const guessNumber = Number(guess);
        if (isGuessValid(guessNumber, min, max) == false) {
            logInvalidGuess();
            continue;
        } else {
            if (guessNumber === numberToGuess) {
                logCorrectGuess(attempt);
                rl.close();
                return ;
            } else {
                logWrongGuess(guessNumber, numberToGuess);
            }
        }
        attempt++;
    }
    logNoMoreAttempts();
    rl.close();
}

async function promptGuess() {
    const guess = await rl.question("Enter your guess: ");
    return guess;
}

function isGuessValid(number, min, max) {
    if (isNaN(number) || number < min || number > max) {
        return false;
    } else {
        return true;
    }
}