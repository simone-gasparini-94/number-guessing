export function generateRandomNumber(min, max) {
    if (min >= max) return;
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}