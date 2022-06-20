// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let val= 2

// for (let i = 1; i <= 10; i++){
//     result = val**i;
//     console.log(result)
// }


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// function expon (a, b){

// for (let i = 1; i <= b; i++){
//     result = a**i;
//     console.log(result)
// }
// }

// expon (2, 10)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)


// let num = 5

// let smile = ''

// for (let i = 1; i <= num; i++){
//     for (let j = 1; j <= i; j++){
//         smile += ':)'        
//     }
// smile += '\n'    
// }
// console.log(smile)


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// function printSmile(count, smile){
//     let rez = ''
//     for (let i = 1; i <= count; i++){
//         for (let j = 1; j <= i; j++){
//            rez += smile     
//         }
//     rez += '\n'    
//     }
    
// return rez
   
// }

// console.log(printSmile(5, ':)'))

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

// let a = 'Check-list'

// console.log(a.split('-').join(''))


// function getWorldStructure(world){
//     let letters = ['a', 'e', 'i', 'o', 'u']
//     let count = 0
//     let count_1 = 0    
 
//     for (let value of world.toLowerCase().split('-').join('')){
//         if(letters.includes(value)){
//             count ++             
//         }
//         if(!letters.includes(value)){
           
//             count_1 ++
//         }
               
//     }
//     console.log(count)
//     console.log(count_1)    

// } 

// getWorldStructure('Case')




// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(world){
    let divite = world.split('')
    let turnOver = divite.reverse()
    let newWorld = turnOver.join('')
    let rezult = world === newWorld
    console.log(rezult, newWorld)
}

isPalindrom('Abba')

  



