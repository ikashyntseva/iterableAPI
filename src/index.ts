interface anyObj {
  [key: string]: any;
}

type FilterCallBack = (el: any) => boolean

type MapCallBack = (el: any) => any

// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Генераторы использовать нельзя.

export const objToIterator = (obj: anyObj): IterableIterator<any> => {
  let cursor = 0;
  const keys = Object.keys(obj);
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        value: obj[keys[cursor]],
        done: cursor++ >= keys.length,
      };
    },
  };
};

// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Итератор должен создаваться с помощью генератора.

export function* objToIterator2(obj: anyObj) {
  yield* Object.values(obj);
}

// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Генераторы использовать нельзя.

export const filter = (
  iterable: Iterable<any>,
  filterCb: FilterCallBack
): IterableIterator<any> => {
  const iter = iterable[Symbol.iterator]();

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let done = false;

      do {
        const data = iter.next();
        const value = data.value;

        done = data.done!;

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
};

// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Итератор должен создаваться с помощью генератора.

export function* filter2(iterable: Iterable<any>, filterCb: FilterCallBack) {
  for (const el of iterable) {
    if (filterCb(el)) yield el;
  }
}

// Написать функцию, которая принимает Iterable объект и функцию отображения и возвращает итератор,
// который возвращает элементы, полученные с помощью функции отображения. Генераторы использовать нельзя.

export const map = (iterable: Iterable<any>, mapCb: MapCallBack) => {
  const iter = iterable[Symbol.iterator]();

  return {
    ...iterable,
    [Symbol.iterator]() {
      return {
        next() {
          let done = false;

          do {
            const data = iter.next();

            done = data.done!;

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

export function* map2(iterable: Iterable<any>, mapCb: MapCallBack) {
  for (const el of iterable) {
    yield mapCb(el);
  }
}
