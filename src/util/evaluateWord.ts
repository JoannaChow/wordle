import { Evaluation } from "../consts";

export const evaluateWord = (word: string, solution: string): Evaluation[] => {
  if (word.length !== solution.length) {
    throw new Error("Word must have the same length!");
  }
  return word.split("").map((letter, index) => {
    if (letter.toLocaleUpperCase() === solution[index].toLocaleUpperCase()) {
      return Evaluation.CORRECT;
    }

    if (
      solution.toLocaleUpperCase().indexOf(letter.toLocaleUpperCase()) !== -1
    ) {
      return Evaluation.PRESENT;
    }

    return Evaluation.ABSENT;
  });
};
