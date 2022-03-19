import { Evaluation } from "../../consts";
import { evaluateWord } from "../evaluateWord";

describe("evaluateWord", () => {
  test("it works", () => {
    const validWord = "heloa";
    const invalidWord = "he";
    const solution = "hello";

    expect(evaluateWord(validWord, solution)).toStrictEqual([
      Evaluation.CORRECT,
      Evaluation.CORRECT,
      Evaluation.CORRECT,
      Evaluation.PRESENT,
      Evaluation.ABSENT,
    ]);

    expect(() => evaluateWord(invalidWord, solution)).toThrow();
  });
});
