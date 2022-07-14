// const normalizeUrl = (email) => {
//     let emailType
//     if(email.startsWith('https://')) {
//         emailType = email
//     } else {
//         emailType = 'https://' + email
//     }
//     return emailType
// }

// console.log(normalizeUrl('https://google.com'))


// const convertText = (world) => {
//     if (world === '') {
//         return ''
//     }else if(world[0] === world[0].toUpperCase()){
//         return world
//     } else{
//       return world.split('').reverse().join('')
//     }   
// }

// console.log(convertText('head'))



// const getNumberExplanation = (number) => {
//     switch (number) {
//         case 666 :
//             return 'devil number' 
//         case 42 :
//             return 'answer for everything'
//         case 7 :
//             return 'prime number'
//         default :
//             return null
//     }
// }



// console.log(getNumberExplanation(666))


// const printNumbers = (initialNumber) => {
//     while(initialNumber){
//         console.log(initialNumber)
//         initialNumber -= 1
//     }
//     console.log('finished!')
// };

// printNumbers(4)

// const multiplyNumbersFromRange = (start, finish) => {
//     let i = start;
//     let multiply = 1;
  
//     while (i <= finish) {
//       multiply *= i
 
//       i += 1
//     }
//     return multiply;
//   }
  
//  console.log(multiplyNumbersFromRange(3, 5))


// const joinNumbersFromRange = (start, finish) => {
//     let i = start
//     let str = ''
//     while(i <= finish) {
//       str += i;
//       i += 1
//     }
//     return str
//   }

// console.log(joinNumbersFromRange(1,10))

// const reverse = (str) => {
//     let i = 0;
//     // Нейтральный элемент для строк это пустая строка
//     let result = '';
//     while (i < str.length) {
//       // Соединяем в обратном порядке
//       result = `${str[i]}${result}`;
//       // То же самое через конкатенацию
//       // result = str[i] + result;
//       i = i + 1;
//     }
  
//     return result;
//   };

//   console.log(reverse('Name'))


// const mySubstr = (text, num) => {
//   let i = 0
//   let result = ''
//   while (i <= text.length) {
//     if (i === num) return result
//     result = `${result}${text[i]}`
//     i = i + 1
//   }
//   return result
// }

// console.log(mySubstr('My name is Denis', 22))


// const countChars = (str, char) => {
//   let i = 0
//   let count = 0

//   while(i <= str.length) {
//     if(str[i] === char.toLowerCase() || str[i] === char.toUpperCase()) {
//         count = count + 1   
//     } 
//     i = i + 1
//   }
//   return count
// }

// console.log(countChars('HexlEt', 'E'))


// const makeItFunny = (text, num) => {
  
//     let i = 0
//     let rez = ''
//     while(i < text.length) {
//         if((i+1) % num === 0){           
//             rez += text[i].toUpperCase() 
//         } else {
//             rez += text[i]
//         }
//         i++
//     } 
//   return rez
// }

// console.log(makeItFunny('I never look back', 3))


// const getHalfString = (str) => {
//     let result = '';
//     for (let i = 0; i <  str.length / 2; i += 1) {
//       result += Number(str[i]);
//     }
//     return result;
//   };
  
//   console.log(getHalfString("12345"));


/*Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.*/

// const encrypt = (world) => {
//     let rez =''
//     for(let i = 0; i < world.length; i+=2){
//         if(i+1 === world.length){
//             rez +=  world[i]
//         } else {
//             rez += world[i + 1] + world[i]
//         }         
//   }
//   return rez
// }

// console.log(encrypt('go!'))

// const encrypt1 = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 2) {
//       const nextSymbol = str[i + 1] || '';
//       result = `${result}${nextSymbol}${str[i]}`;
//     }
  
//     return result;
// };

// console.log(encrypt1('go!'))
 

/* Импортируйте функцию getTriangleArea() из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. 
Используйте функцию square() (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию.*/


import { getTriangleArea } from './myMathModule';

const calculatesTriangle = (n) => getTriangleArea(n, square(n)/2)

export default calculatesTriangle;