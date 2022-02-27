import { observer } from "mobx-react";
import React from "react";
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";
import { GamesStore } from "../../stores/GamesStore"


@observer
export class Game extends React.Component {
    render() {
        return (
            <>
            {JSON.stringify(GamesStore.get().currentGame)}
                <Header/>
                <Grid/>
                <Keyboard/>
            </>
        );
    }
}