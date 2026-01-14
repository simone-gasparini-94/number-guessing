export function logWelcomeMessage() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100");
    console.log("Can you guess it?");
    console.log("");
}

export function logDifficulties() {
    console.log("Please select the difficulty level:");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");
    console.log("");
}

export function logDifficultyChoice(difficulty) {
    console.log
        (`You have selected the ${difficulty} difficulty level`);
    console.log("");
}

export function logInvalidDifficulty() {
    console.log("Invalid difficulty");
    console.log("");
}