import { observer } from "mobx-react";
import React from "react";

interface IProps {
    tiles: any[][];
}

@observer
export class Grid extends React.Component<IProps> {
    render() {
        return (
            <>
                {this.props.tiles.map((row, rowIdx) => (
                    <div key={rowIdx}>
                        {row.map((tile, colIdx) => (
                            <span key={colIdx}>
                                {rowIdx}-{colIdx}
                            </span>
                        ))}
                    </div>
                ))}
            </>
        );
    }
}