import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { logDifficultyChoice } from './log.js';

const rl = readline.createInterface({ input, output });

const difficulties = createDifficulties();

export async function chooseDifficulty() {
    logDifficultyChoice();
    let chosenLevel = await promptDifficulty();
    const chosenDifficulty = difficulties.find(
        element.level === Number(chosenLevel)
    );
    return chosenDifficulty.chances;
}

async function promptDifficulty() {
    const answer = await rl.question("Enter your choice: ");
    return answer;
}

function createDifficulty(level, difficulty, chances) {
    return {
        level,
        difficulty,
        chances
    }
}

function createDifficulties() {
    let diff = [];
    const easy = createDifficulty(1, "Easy", 10);
    diff.push(easy);
    const medium = createDifficulty(2, "Medium", 5);
    diff.push(medium);
    const hard = createDifficulty(3, "Hard", 3);
    diff.push(hard);
    return (diff);
}