import { computed, observable } from "mobx";
import { LocalStorageService } from "../services/LocalStorageService";
import { singletonGetter } from "../util/singletonGetter";

export interface IGame {
    guesses: string[];
    evaluation: string[][];
    status: string;
    solution: string;
}

export class GamesStore {
    static get = singletonGetter(GamesStore);
    static newGame = () => ({
        guesses: [],
        evaluation: [],
        status: "IN_PROGRESS",
        solution: "hello",
    });

    @observable
    private games;

    constructor() {
        this.games = LocalStorageService.getItem<IGame[]>("games") ?? [];
        if(!this.games.length) {
            this.games = [GamesStore.newGame()];
            LocalStorageService.setItem("games", this.games);
        }
    }

    @computed
    get currentGame() :IGame {
        return this.games[this.games.length - 1];
    }
}