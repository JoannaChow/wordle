import { flatten } from "lodash";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { KEYBOARD_KEYS, Key, Color } from "../../../consts";

interface IProps {
  onKey: (key: Key) => void;
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
    return (
      <>
        {KEYBOARD_KEYS.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((keyName, colIndex) => (
              <KeyBtn key={colIndex} onClick={() => this.props.onKey(keyName)}>
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
`;

const KeyBtn = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: ${Color.colorBg};
  color: ${Color.keyTextColor};
`;
