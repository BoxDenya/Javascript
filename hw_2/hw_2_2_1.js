/* 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
которая и будет выводиться в консоль (как в условии смайлик), 
а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)*/

/*option one*/

function printSmile(str, smile){    
    let result = ''
    for(let i = 1; i <= smile; i++) {
        result = result + str
        console.log(result)
    }   
}

printSmile(';)', 7)

/*option two*/

// function printSmile(str, smile){    
  
//     for(let i = 1; i <= smile; i++) {
//         console.log(str.repeat(i))
//     }   
// }

// printSmile(';(', 3)