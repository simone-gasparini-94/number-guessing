function createDifficulty(difficulty, chances) {
    return {
        difficulty,
        chances
    }
}

export function createDifficulties() {
    let diff = [];
    const easy = createDifficulty("Easy", 10);
    diff.push(easy);
    const medium = createDifficulty("Medium", 5);
    diff.push(medium);
    const hard = createDifficulty("Hard", 3);
    diff.push(hard);
    return (diff);
}