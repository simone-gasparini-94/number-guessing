import { createDifficulties } from "./difficulty.js";
import { logWelcomeMessage } from "./log.js"

(function main(){
    logWelcomeMessage();
    const difficulties = createDifficulties();
})();