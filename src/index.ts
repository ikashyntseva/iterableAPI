export const objToIterator = (obj: { [key: string]: any }): Iterable<T> => {
  return {
    ...obj,
    [Symbol.iterator]() {
      let cursor = 0;
      const keys: string[] = Object.keys(this);

      return {
        next: () => {
          const key: string = keys[cursor];
          const value: number = this[key];

          if (cursor++ < keys.length) {
            return {
              value,
              done: false,
            };
          }

          return {
            value: undefined,
            done: true
          }
        },
      };
    },
  };
};


const tmp = {
    a: 1,
    b: 2
}

console.log(Array.from(objToIterator(tmp)))