import { DictionaryService } from "../../services/DictionaryService";

describe("DictionaryService", () => {
  it("it can generate a word", () => {
    expect(DictionaryService.get().getNewWord().length).toEqual(5);
  });

  it("it can verify a word", () => {
    expect(DictionaryService.get().isValidWord("hello")).toBe(true);
    expect(DictionaryService.get().isValidWord("asdfs")).toBe(false);
  });
});
