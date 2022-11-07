"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
console.log(Array.from((0, __1.objToIterator)({ a: 1, b: 2 })));
console.log(Array.from((0, __1.objToIterator2)({ a: 1, b: 2 })));
console.log(Array.from((0, __1.filter)(new Set([1, 2, 3, 4]), (el) => el > 2)));
console.log(Array.from((0, __1.filter2)(new Set([1, 2, 3, 4]), (el) => el > 2)));
console.log(Array.from((0, __1.map)(new Set([1, 2, 3, 4]), (el) => el * 2)));
console.log(Array.from((0, __1.map2)(new Set([1, 2, 3, 4]), (el) => el * 2)));
