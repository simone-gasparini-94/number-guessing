export function getInitialTime() {
    return new Date();
}

export function getTimeDifference(initialTime) {
    const finalTime = new Date();
    return (finalTime - initialTime);
}