import { observer } from "mobx-react";
import React from "react";
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
          <div key={rowIdx}>
            {row.map((tile, colIdx) => (
              <span key={colIdx}>{tile.letter}</span>
            ))}
          </div>
        ))}
      </>
    );
  }
}
