import { observable } from "mobx";
import { LocalStorageService } from "../services/LocalStorageService";
import { singletonGetter } from "../util/singletonGetter";

interface Game {
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
        this.games = LocalStorageService.getItem<Game[]>("games") ?? [];
        if(!this.games.length) {
            this.games = [GamesStore.newGame()];
            LocalStorageService.setItem("games", this.games);
        }
    }

    get currentGame() :Game {
        return this.games[this.games.length - 1];
    }
}