import { observer } from "mobx-react";
import React from "react";
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";


@observer
export class Game extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Grid/>
                <Keyboard/>
            </>
        );
    }
}