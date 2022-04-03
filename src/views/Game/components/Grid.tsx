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
              <Tile key={colIdx} isEmpty={!tile.letter}>
                {tile.letter}
              </Tile>
            ))}
          </TileRow>
        ))}
      </>
    );
  }
}

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
