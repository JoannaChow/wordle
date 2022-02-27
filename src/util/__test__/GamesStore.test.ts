import { GamesStore } from "../../stores/GamesStore";

describe("GamesStore", () => {
    it("", () => {
        expect(GamesStore.get().currentGame).toEqual({
            guesses: [],
            evaluation: [],
            status: "IN_PROGRESS",
            solution: "hello",
        })
    })
});