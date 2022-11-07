import { filter, filter2, map, map2, objToIterator, objToIterator2 } from "..";

// objToIterator


// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Генераторы использовать нельзя.

// [1, 2]
console.log(Array.from(objToIterator({a: 1, b: 2})));


// objToIterator 2


// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Итератор должен создаваться с помощью генератора.

// [1, 2]
console.log(Array.from(objToIterator2({a: 1, b: 2})));


// filter


// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Генераторы использовать нельзя.

// [3, 4]
console.log(Array.from(filter(new Set([1, 2, 3, 4]), (el) => el > 2)));


// filter 2


// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Итератор должен создаваться с помощью генератора.

// [3, 4]
console.log(Array.from(filter2(new Set([1, 2, 3, 4]), (el) => el > 2)));


// map


// Написать функцию, которая принимает Iterable объект и функцию отображения и возвращает итератор,
// который возвращает элементы, полученные с помощью функции отображения. Генераторы использовать нельзя.

// [2, 4, 6, 8]
console.log(Array.from(map(new Set([1, 2, 3, 4]), (el) => el * 2)));


// map 2


// Написать функцию, которая принимает Iterable объект и функцию отображения и возвращает итератор,
// который возвращает элементы, полученные с помощью функции отображения. Итератор должен создаваться с помощью генератора.

// [2, 4, 6, 8]
console.log(Array.from(map2(new Set([1, 2, 3, 4]), (el) => el * 2)));


// // on


// // Написать функцию, которая принимает некоторый элемент и название события для прослушки и возвращает асинхронный итератор.
// // Итератор будет возвращать новые элементы (объекты события) при срабатывании события.

// (async () => {
//   for await (const e of on(document, 'click')) {
//     console.log(e);
//   }
// })();


// // enumerate


// // Написать функцию, которая принимает Iterable объект и возвращает итератор,
// // который возвращает пары вида [номер итерации, элемент.]. Генераторы использовать нельзя.

// // [[0, 1], [1, 2], [2, 3]]
// Array.from(enumerate([1, 2, 3]));


// // enumerate 2


// // Написать функцию, которая принимает Iterable объект и возвращает итератор,
// // который возвращает пары вида [номер итерации, элемент.]. Итератор должен создаваться с помощью генератора.

// // [[0, 1], [1, 2], [2, 3]]
// Array.from(enumerate([1, 2, 3]));


// // take


// // Написать функцию, которая принимает Iterable объект и максимальное количество итераций и возвращает итератор,
// // который завершиться после достижения нужного количества итераций. Генераторы использовать нельзя.


// // [1, 2]
// Array.from(take([1, 2, 3], 2));


// // take 2


// // Написать функцию, которая принимает Iterable объект и максимальное количество итераций и возвращает итератор,
// // который завершиться после достижения нужного количества итераций. Итератор должен создаваться с помощью генератора.

// // [1, 2]
// Array.from(take([1, 2, 3], 2));


// // repeat


// // Написать функцию, которая принимает Iterable объект и количество повторений и возвращает итератор,
// // который продублирует все элементы из исходного заданное количество раз. Генераторы использовать нельзя.

// // [1, 2, 3, 1, 2, 3]
// Array.from(repeat([1, 2, 3], 2));


// // repeat 2


// // Написать функцию, которая принимает Iterable объект и количество повторений и возвращает итератор,
// // который продублирует все элементы из исходного заданное количество раз. Итератор должен создаваться с помощью генератора.

// // [1, 2, 3, 1, 2, 3]
// Array.from(repeat([1, 2, 3], 2));


// // zip


// // Написать функцию, которая принимает 2 и более Iterable объектов и возвращает итератор,
// // который создаст кортежи из элементов исходных итераторов. Генераторы использовать нельзя.

// // [[1, 2], [2, 3], [3, 4]]
// Array.from(zip([1, 2, 3], [2, 3, 4]));


// // zip 2


// // Написать функцию, которая принимает 2 и более Iterable объектов и возвращает итератор,
// // который создаст кортежи из элементов исходных итераторов. Итератор должен создаваться с помощью генератора.

// // [[1, 2], [2, 3], [3, 4]]
// Array.from(zip([1, 2, 3], [2, 3, 4]));


// // flat и flatMap


// // Нужно написать аналог flat и flatMap, но который возвращает итератор. Генераторы использовать нельзя.

// // [1, 2, 2, 3, 3, 4]
// Array.from(flat([[1, 2, 3], [2, 3, 4]]));


// // flat и flatMap 2


// // Нужно написать аналог flat и flatMap, но который возвращает итератор. Итератор должен создаваться с помощью генератора.

// // [1, 2, 2, 3, 3, 4]
// Array.from(flat([[1, 2, 3], [2, 3, 4]]));

