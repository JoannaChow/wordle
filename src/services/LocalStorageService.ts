export class LocalStorageService {
    static getItem<T>(key: string): T | undefined {
        return JSON.parse(localStorage.getItem(key) ?? "{}") as T;
    }

    static setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}