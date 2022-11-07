// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Генераторы использовать нельзя.

export const objToIterator = (obj) => ({
  ...obj,
  [Symbol.iterator]() {
    let cursor = 0;
    const keys = Object.keys(this);

    return {
      next: () => ({
        value: this[keys[cursor]],
        done: cursor++ >= keys.length,
      }),
    };
  },
});

// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Итератор должен создаваться с помощью генератора.

export function* objToIterator3(obj) {
  yield* Object.values(obj);
}

// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Генераторы использовать нельзя.

export const filter = (iterable, filterCb) => {
  const iter = iterable[Symbol.iterator]();

  return {
    ...iterable,
    [Symbol.iterator]() {
      return {
        next() {
          let done = false;

          do {
            const data = iter.next();
            const value = data.value;

            done = data.done;

            if (filterCb(value)) {
              return {
                value,
                done: false,
              };
            }
          } while (!done);

          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
};

// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Итератор должен создаваться с помощью генератора.

export function* filter2(iterable, filterCb) {
  for (const el of iterable) {
    if (filterCb(el)) yield el;
  }
}

// Написать функцию, которая принимает Iterable объект и функцию отображения и возвращает итератор,
// который возвращает элементы, полученные с помощью функции отображения. Генераторы использовать нельзя.

export const map = (iterable, mapCb) => {
  const iter = iterable[Symbol.iterator]();

  return {
    ...iterable,
    [Symbol.iterator]() {
      return {
        next() {
          let done = false;

          do {
            const data = iter.next();

            done = data.done;

            return {
              value: mapCb(data.value),
              done,
            };
          } while (!done);
        },
      };
    },
  };
};

// Написать функцию, которая принимает Iterable объект и функцию отображения и возвращает итератор,
// который возвращает элементы, полученные с помощью функции отображения. Итератор должен создаваться с помощью генератора.

export function* map2(iterable, mapCb) {
  for (const el of iterable) {
    yield mapCb(el);
  }
}
