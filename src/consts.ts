export const ROWS = 6;
export const COLS = 5;

export enum Evaluation {
  PRESENT = "PRESENT",
  ABSENT = "ABSENT",
  CORRECT = "CORRECT",
}

export enum Status {
  IN_PROGRESS = "IN_PROGRESS",
  WON = "WON",
  LOST = "LOST",
}

export const KEYBOARD_KEYS: Key[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

const KEYS = [
  "ENTER",
  "BACKSPACE",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
] as const;

export type Key = typeof KEYS[number];

export const Color = {
  colorBg: "#D3D6DA",
  keyTextColor: "#000000",
};
