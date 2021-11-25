// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
// minNumber(5, 8, 10);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     }
// }
// maxNumber(5, 8, 10);


// - створити функцію яка повертає найбільше число з масиву
// let maxNumArr = (arr) => {
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//     }
//     return max;
// };
// console.log(maxNumArr([5, 70, 9, 8, 50]));


// - створити функцію яка повертає найменьше число з масиву
// let minNumArr = (arr) => {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// };
// console.log(minNumArr([5, 70, 9, 8, 50, 1]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrSuma = (arr) => {
//     let result = 0;
//     for (const arrElement of arr) {
//         result = result + arrElement;
//     }
//     return result
// };
// console.log(arrSuma([1, 2, 10]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrArifmetic = (arr) => {
//     let suma = 0;
//     for (const arrElement of arr) {
//         suma = suma + arrElement;
//     }
//     return suma / arr.length;
// };
// console.log(arrArifmetic([5, 70, 9, 8, 50, 1]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numMinMax = (numbers) => {
//     let min = numbers[0];
//     let max = numbers[0];
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//         if (number > max) {
//             max = number;
//         }
//     }
//     document.write(max);
//     return min;
// };
// numMinMax([5, 4, 7, 8, 10, 54, 1]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arrRandom = (arr) => {
//     arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//
//     }
//     return arr;
// };
// console.log(arrRandom([]));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arrRandom = (arr, limit) => {
//     arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// };
// console.log(arrRandom([], 12));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reversFn = (arr) => {
//     let arrRevers = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         arrRevers.push(arrElement);
//     }
//     document.write(arrRevers);
// };
// reversFn([1, 2, 3]);