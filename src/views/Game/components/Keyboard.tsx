import { flatten } from "lodash";
import { observer } from "mobx-react";
import React from "react";
import { KEYBOARD_KEYS, Key } from "../../../consts";

interface IProps {
    onKey: (key: Key) => void;
}

@observer
export class Keyboard extends React.Component<IProps> {
    private handleKeyup = (event: KeyboardEvent) => {
        if (flatten(KEYBOARD_KEYS).includes(event.key.toUpperCase())) {
            this.props.onKey(event.key.toUpperCase() as Key);
        }
    };

    componentDidMount() {
        window.addEventListener("keyup", this.handleKeyup);
    }

    componentWillUnmount() {
        window.removeEventListener("keyup", this.handleKeyup);
    }

    render() {
        return null;
    }
}