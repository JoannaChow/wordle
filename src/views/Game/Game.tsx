import { observer } from "mobx-react";
import React from "react";
import { Header } from "./components/Header";
import { Grid, ITile } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";
import { GamesStore, IGame } from "../../stores/GamesStore";
import { action, computed, observable } from "mobx";
import { ROWS, COLS, Key, Evaluation, Status } from "../../consts";
import { evaluateWord } from "../../util/evaluateWord";
import { round } from "lodash";
import { DictionaryService } from "../../services/DictionaryService";

interface IProps {
    game: IGame;
}

@observer
export class Game extends React.Component<IProps> {
    @observable
    private currentInput = "";
    @observable
    private guessedLetters: Map<string, Evaluation> = new Map();

    @computed
    private get gridTiles(): ITile[][] {
        const { game } = this.props;

        const tiles: ITile[][] = new Array(ROWS)
            .fill(null)
            .map(() => new Array(COLS).fill({}));

        const allWords = [...game.guesses, this.currentInput];
        allWords.forEach((word, rowIndex) => {
            word.split("").forEach((letter, colIndex) => {
                tiles[rowIndex][colIndex] = {
                    letter: letter,
                    evaluation: game.evaluation[rowIndex]?.[colIndex],
                };
            });
        });
        return tiles;
    }

    @action
    private onKeyHandler = (key: Key) => {
        switch (key) {
            case "BACKSPACE":
                this.currentInput = this.currentInput.slice(0, -1);
                return;
            case "ENTER":
                this.submitGuess();
                return;
            default:
                this.currentInput =
                    this.currentInput.length < COLS
                        ? this.currentInput.concat(key)
                        : this.currentInput;
                return;
        }
    };

    @action
    private submitGuess = () => {
        const { game } = this.props;

        if (this.currentInput.length !== COLS) {
            return;
        }

        if (!DictionaryService.get().isValidWord(this.currentInput)) {
            return;
        }

        if (game.guesses.length >= ROWS) {
            return;
        }
        game.guesses.push(this.currentInput);
        game.evaluation.push(evaluateWord(this.currentInput, game.solution));
        this.currentInput.split("").forEach((letter, index) => {
            const newEval = game.evaluation[game.evaluation.length - 1][index];
            const existingEval = this.guessedLetters.get(letter);
            if (
                !existingEval ||
                (existingEval === Evaluation.PRESENT &&
                    newEval === Evaluation.CORRECT) ||
                existingEval === Evaluation.CORRECT
            ) {
                this.guessedLetters.set(letter, newEval);
            }
        });

        if (
            game.evaluation[game.evaluation.length - 1].every(
                (e) => e === Evaluation.CORRECT
            )
        ) {
            game.status = Status.WON;
        }

        if (game.guesses.length >= ROWS) {
            game.status = Status.LOST;
        }

        this.currentInput = "";
        return;
    };

    render() {
        return (
            <>
                <Header />
                <Grid tiles={this.gridTiles} />
                <Keyboard
                    onKey={this.onKeyHandler}
                    guessedLetters={this.guessedLetters}
                />
            </>
        );
    }
}
