import { rl } from "./rl.js";

import { 
    logDifficulties,
    logDifficultyChoice,
    logInvalidDifficulty
 } from './log.js';

const difficulties = createDifficulties();

export async function chooseDifficulty() {
    logDifficulties();
    let chosenLevel = await promptDifficulty();
    const chosenDifficulty = difficulties.find(
        (element) => element.level === Number(chosenLevel)
    );
    if (!chosenDifficulty) {
        logInvalidDifficulty();
        return chooseDifficulty();
    }
    logDifficultyChoice(chosenDifficulty.difficulty);
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