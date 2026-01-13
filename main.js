import { chooseDifficulty } from "./difficulty.js";
import { logWelcomeMessage } from "./log.js"

async function main() {
    logWelcomeMessage();
    const chances = await chooseDifficulty();
    console.log(chances);
};

main();