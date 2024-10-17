export class NumberUtility {
    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min + 1;
    }
}

