import { LocalStorageService } from "../../services/LocalStorageService"

describe("LocalStorageService", ()=>{
    it("it can get & save array", () => {
        LocalStorageService.setItem("number", -100);
        expect(LocalStorageService.getItem("number")).toBe(-100);

        LocalStorageService.setItem("object", {value: 1});
        expect(LocalStorageService.getItem("object")).toEqual({value: 1});

        LocalStorageService.setItem("array", [1,2,3]);
        expect(LocalStorageService.getItem("array")).toEqual([1,2,3]);

        LocalStorageService.setItem("string", "Hello");
        expect(LocalStorageService.getItem("string")).toBe("Hello");
    })
});