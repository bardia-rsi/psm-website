import { countRepeatedChars, countConsecutiveChars } from "../utils/string";

export type Complexity = "very weak" | "weak" | "moderate" | "good" | "strong" | "unknown";

interface Score {
    additions: {
        length: number;
        lowers: number;
        uppers: number;
        numbers: number;
        symbols: number;
    };
    deductions: {
        lettersOnly: number;
        numbersOnly: number;
        repeatedChars: number;
        consecutiveLowers: number;
        consecutiveUppers: number;
        consecutiveNumbers: number;
        consecutiveSymbols: number;
    };
}

export const strengthTester = (p: string): number => {

    if (p.length === 0) {
        return 0;
    }

    const score: Score = {
        additions: {
            length: p.length * 2,
            lowers: (p.match(/[a-z]/g)?.length || 0) * 2,
            uppers: (p.match(/[A-Z]/g)?.length || 0) * 2,
            numbers: (p.match(/\d/g)?.length || 0) * 3,
            symbols: (p.match(/[^A-Z0-9]/gi)?.length || 0) * 4
        },
        deductions: {
            lettersOnly: p.match(/[a-z]/gi)?.length === p.length ? -p.length : 0,
            numbersOnly: p.match(/\d/g)?.length === p.length ? -p.length : 0,
            repeatedChars: countRepeatedChars(p) * -3,
            consecutiveLowers: countConsecutiveChars(p, /[a-z]+/g) * -2,
            consecutiveUppers: countConsecutiveChars(p, /[A-Z]+/g) * -2,
            consecutiveNumbers: countConsecutiveChars(p, /\d+/g) * -2,
            consecutiveSymbols: countConsecutiveChars(p, /[^\da-z]+/gi) * -2
        }
    }

    const totalScore: number = Object
        .values({ ...score.additions, ...score.deductions })
        .reduce((a, b) => a + b);

    return totalScore > 100 ? 100 : totalScore < 0 ? 0 : totalScore;

}

export const complexity = (score: number): Complexity => {
    switch (true) {
        case score >= 0 && score <= 20:
            return "very weak";
        case score <= 40:
            return "weak";
        case score <= 60:
            return "moderate";
        case score <= 80:
            return "good";
        case score <= 100 || score >= 100:
            return "strong";
        default:
            return "unknown";
    }
}