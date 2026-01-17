import { chooseDifficulty } from "./difficulty.js";
import { logWelcomeMessage } from "./log.js"
import { generateRandomNumber } from "./number.js";
import { play } from "./play.js";

async function main() {
    logWelcomeMessage();
    const chances = await chooseDifficulty();
    const min = 1;
    const max = 100;
    const number = generateRandomNumber(min, max);
    await play(chances, number, min, max);
};

main();