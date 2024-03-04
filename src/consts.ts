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

export type Key = (typeof KEYS)[number];

export const Color = {
    keyBg: "#D3D6DA",
    keyBgCorrect: "#6aaa64",
    keyBgPresent: "#c9b458",
    keyBgAbsent: "#787c7e",
    keyTextColor: "#000000",
    keyEvaluatedColor: "#ffffff",
};
