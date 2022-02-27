type ClassOf<T> = { new (...args: any[]): T}

export const singletonGetter = <T>(Class: ClassOf<T>) => {
    let instance: T;

    return () => {
        if (!instance) {
            instance = new Class();
        }
        return instance;
    };
};

