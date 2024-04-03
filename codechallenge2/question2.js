function generateArray(start, end) {
    const length = Math.abs(end - start) + 1;
    const direction = Math.sign(end - start);
    return Array.from({ length }, (_, index) => start + index * direction);
}

console.log(generateArray(4, 7));