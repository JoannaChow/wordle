import { computed, observable } from "mobx";
import { Evaluation, Status } from "../consts";
import { DictionaryService } from "../services/DictionaryService";
import { LocalStorageService } from "../services/LocalStorageService";
import { singletonGetter } from "../util/singletonGetter";

export interface IGame {
    guesses: string[];
    evaluation: Evaluation[][];
    status: Status;
    solution: string;
}

export class GamesStore {
    static get = singletonGetter(GamesStore);
    static newGame = () => ({
        guesses: [],
        evaluation: [],
        status: Status.IN_PROGRESS,
        solution: DictionaryService.get().getNewWord(),
    });

    @observable
    private games;

    constructor() {
        this.games = LocalStorageService.getItem<IGame[]>("games") ?? [];
        if (!this.games.length) {
            this.games = [GamesStore.newGame()];
            LocalStorageService.setItem("games", this.games);
        }
        console.log(`solution: ${this.games[0].solution}`);
    }

    @computed
    get currentGame(): IGame {
        return this.games[this.games.length - 1];
    }
}
