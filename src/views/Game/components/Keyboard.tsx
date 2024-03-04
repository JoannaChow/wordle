import { flatten } from "lodash";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { KEYBOARD_KEYS, Key, Color, Evaluation } from "../../../consts";

interface IProps {
    onKey: (key: Key) => void;
    guessedLetters: Map<string, Evaluation>;
}

@observer
export class Keyboard extends React.Component<IProps> {
    private handleKeyup = (event: KeyboardEvent) => {
        if (flatten(KEYBOARD_KEYS).includes(event.key.toUpperCase() as Key)) {
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
        const { onKey, guessedLetters } = this.props;
        return (
            <>
                {KEYBOARD_KEYS.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map((keyName, colIndex) => (
                            <KeyBtn
                                key={colIndex}
                                onClick={() => onKey(keyName)}
                                className={`${
                                    guessedLetters.get(keyName) ===
                                    Evaluation.ABSENT
                                        ? "keyAbsent"
                                        : guessedLetters.get(keyName) ===
                                          Evaluation.PRESENT
                                        ? "keyPresent"
                                        : guessedLetters.get(keyName) ===
                                          Evaluation.CORRECT
                                        ? "keyCorrect"
                                        : "keyModule"
                                } ${
                                    keyName === "ENTER" ||
                                    keyName === "BACKSPACE"
                                        ? `key${keyName}`
                                        : ""
                                }`}
                            >
                                {keyName}
                            </KeyBtn>
                        ))}
                    </Row>
                ))}
            </>
        );
    }
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto 8px;
`;

const KeyBtn = styled.button((props) => ({
    border: `0`,
    borderRadius: `4px`,
    height: `58px`,
    padding: `18px`,
    margin: `0 6px 0 0`,
    fontWeight: `bold`,
    fontSize: `1.25em`,
    userSelect: `none`,
}));
