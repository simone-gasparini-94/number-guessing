import { chooseDifficulty } from "./difficulty.js";
import { logWelcomeMessage, logEmpty } from "./log.js"
import { generateRandomNumber } from "./number.js";
import { play, playAgain } from "./play.js";
import { closeReadLine } from "./rl.js";

async function main() {
    logWelcomeMessage();
    const chances = await chooseDifficulty();
    const min = 1;
    const max = 100;
    const number = generateRandomNumber(min, max);
    await play(chances, number, min, max);
    if (await playAgain() == true) {
        logEmpty();
        await main();
    } else {
        closeReadLine();
    }
};

main();