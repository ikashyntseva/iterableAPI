"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map2 = exports.map = exports.filter2 = exports.filter = exports.objToIterator2 = exports.objToIterator = void 0;
const objToIterator = (obj) => {
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
exports.objToIterator = objToIterator;
function* objToIterator2(obj) {
    yield* Object.values(obj);
}
exports.objToIterator2 = objToIterator2;
const filter = (iterable, filterCb) => {
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
};
exports.filter = filter;
function* filter2(iterable, filterCb) {
    for (const el of iterable) {
        if (filterCb(el))
            yield el;
    }
}
exports.filter2 = filter2;
const map = (iterable, mapCb) => {
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
exports.map = map;
function* map2(iterable, mapCb) {
    for (const el of iterable) {
        yield mapCb(el);
    }
}
exports.map2 = map2;
