import readline from "node:readline";
import { createDifficulties } from "./difficulty.js";
import { logWelcomeMessage } from "./log.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdou
});

(function main(){
    logWelcomeMessage();
    const difficulties = createDifficulties();
})();