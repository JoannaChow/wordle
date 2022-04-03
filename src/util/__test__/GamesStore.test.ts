import { GamesStore } from "../../stores/GamesStore";

describe("GamesStore", () => {
    it("should create the first gamge if none exists", () => {
        expect(GamesStore.get().currentGame).toBeDefined();
    });
});