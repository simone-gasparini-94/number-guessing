import { chooseDifficulty } from "./difficulty.js";
import { logWelcomeMessage } from "./log.js"
import { generateRandomNumber } from "./number.js";

async function main() {
    logWelcomeMessage();
    const chances = await chooseDifficulty();
    const number = generateRandomNumber(1, 100);
    console.log(chances);
    console.log(number);
};

main();