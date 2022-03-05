import { observer } from "mobx-react";
import React from "react";
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";
import { GamesStore, IGame } from "../../stores/GamesStore"
import { computed } from "mobx";
import { ROWS, COLS, Key } from "../../consts";

interface IProps {
    game: IGame;
}

@observer
export class Game extends React.Component<IProps> {
    private currentInput: string = "";

    @computed
    private get gridTiles() {
        const tiles = new Array(ROWS)
            .fill(null)
            .map(() => new Array(COLS).fill(null));
        
        return tiles;
    }

    private onKeyHandler = (key: Key) => {
        switch(key) {
            case "BACKSPACE":
                return;
            case "ENTER":
                return;
            default:
                return;
        }
    }

    render() {
        console.log(this.gridTiles);
        return (
            <>
                {this.props.game.solution}
                <Header />
                <Grid tiles={this.gridTiles} />
                <Keyboard onKey={this.onKeyHandler}/>
            </>
        );
    }
}