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
                    <div>
                        {row.map((tile, colIdx) => (
                            <span>
                                {rowIdx}-{colIdx}
                            </span>
                        ))}
                    </div>
                ))}
            </>
        );
    }
}