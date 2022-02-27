import { singletonGetter } from "../singletonGetter";

class A {
    static get = singletonGetter(A);
}

class B {
    static get = singletonGetter(B);
}

describe("singletonGetter", () => {
    test('it works', () => {
        const a1 = A.get();
        const a2 = A.get();

        const b1 = B.get();

        expect(a1).toBe(a2);
        expect(a1).not.toBe(b1);
    });
});