export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmoint = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmoint;
    for (; i < breaks.length; i += jmpAmoint) {
        if (breaks[i]) {
            break;
        }
    }
    for (let j = i - jmpAmoint; j < breaks.length; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}
