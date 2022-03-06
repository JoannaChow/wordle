import { observer } from "mobx-react";
import React from "react";
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";
import { GamesStore, IGame } from "../../stores/GamesStore";
import { action, computed, observable } from "mobx";
import { ROWS, COLS, Key } from "../../consts";

interface IProps {
  game: IGame;
}

@observer
export class Game extends React.Component<IProps> {
  @observable
  private currentInput = "";

  @computed
  private get gridTiles() {
    const tiles = new Array(ROWS)
      .fill(null)
      .map(() => new Array(COLS).fill(null));

    return tiles;
  }

  @action
  private onKeyHandler = (key: Key) => {
    switch (key) {
      case "BACKSPACE":
        this.currentInput = this.currentInput.slice(0, -1);
        return;
      case "ENTER":
        this.submit();
        return;
      default:
        this.currentInput = this.currentInput.concat(key);
        return;
    }
  };

  @action
  private submit = () => {
    return;
  };

  render() {
    return (
      <>
        {this.currentInput}
        <Header />
        <Grid tiles={this.gridTiles} />
        <Keyboard onKey={this.onKeyHandler} />
      </>
    );
  }
}
