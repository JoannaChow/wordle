import { singletonGetter } from "../util/singletonGetter";
import { COMMON_WORDS, UNCOMMON_WORDS } from "../words";

export class DictionaryService {
    static get = singletonGetter(DictionaryService);

    private allWords = [...COMMON_WORDS, ...UNCOMMON_WORDS];

    private validWords = new Set(this.allWords);

    getNewWord(): string {
        return COMMON_WORDS[
            Math.floor(COMMON_WORDS.length * Math.random())
        ];
    }

    isValidWord(word: string): boolean {
        return this.validWords.has(word.toLocaleLowerCase());
    }
}
