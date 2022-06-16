/*1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61*/

// let age_1 = 10
// let age_2 = 18
// let age_3 = 60

// function checkage(age_1) {
//     if (age_1 < age_2){
//         console.log("You don't have access cause your age is " + age_1 + " It’s less then")
//     } else if (age_1 >= age_2 & age_1 < age_3){
//         console.log("Welcome")
//     } else if (age_1 > age_3){
//         console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical work")
//     }
// }

// checkage(17)
// checkage(18)
// checkage(61)

// ________________________________


/*2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/


// let age_1 = 10
// let age_2 = 18
// let age_3 = 60

// function checkage(age_1) {
//     if (!Number.isInteger(age_1)){
//         console.log("Enter the number")
//     } else if (age_1 < age_2){
//         console.log("You don't have access cause your age is " + age_1 + " It’s less then")
//     } else if (age_1 >= age_2 & age_1 < age_3){
//         console.log("Welcome")
//     } else if (age_1 > age_3){
//         console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical work")
//     }
// }

// checkage("dfgdf")
// checkage(18)
// checkage(61)

// _______________________________________

/*3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number*/

let age_1 = 10;
let age_2 = 18
let age_3 = 60

function checkage(age_1) {

       
    if (age_1 == String) {
        // parseInt(age_1.match(/\d+/)) 
        Number(age_1)      
    }  
       
    if (age_1 < age_2){
        console.log("You don't have access cause your age is " + age_1 + " It’s less then")
    } else if (age_1 >= age_2 & age_1 < age_3){
        console.log("Welcome")
    } else if (age_1 > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}


checkage("2")
checkage('18')
checkage(61)




