import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { Evaluation } from "../../../consts";

export interface ITile {
    letter?: string | null;
    evaluation?: Evaluation;
}

interface IProps {
    tiles: ITile[][];
}

@observer
export class Grid extends React.Component<IProps> {
    render() {
        return (
            <>
                {this.props.tiles.map((row, rowIdx) => (
                    <TileRow key={rowIdx}>
                        {row.map((tile, colIdx) => (
                            <Tile
                                key={colIdx}
                                isEmpty={!tile.letter}
                                className="tile"
                                data-state={tileDataState(
                                    tile.letter ?? "",
                                    tile.evaluation
                                )}
                            >
                                {tile.letter}
                            </Tile>
                        ))}
                    </TileRow>
                ))}
            </>
        );
    }
}

const tileDataState = (letter: string, evaluation: Evaluation | undefined) => {
    let dataState = ``;
    switch (evaluation) {
        case Evaluation.ABSENT:
            dataState += "absent";
            break;
        case Evaluation.PRESENT:
            dataState += "present";
            break;
        case Evaluation.CORRECT:
            dataState += "correct";
            break;
        default:
            if (letter > "") {
                dataState += "tbd";
            } else {
                dataState += "empty";
            }
            break;
    }
    return dataState;
};

const TileRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Tile = styled.div<{
    isEmpty: boolean;
}>`
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: ${(props) => (props.isEmpty ? "" : "lightgrey")};
    margin: 5px;
    font-weight: bold;
    font-size: 22pt;
    border: 1px solid grey;
    user-select: none;
`;
