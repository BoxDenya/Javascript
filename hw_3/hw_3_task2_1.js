/*Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs.
 для дальнейшего использования в функции, описанной в задании*/

const fs = require('fs')

let user = JSON.parse(fs.readFileSync('task2.json'))
// console.log(file)


function uniqueFunc1() {
    let unique1 = [];
    user.forEach(el => {
        if(!unique1.includes(JSON.stringify(el))) unique1.push(JSON.stringify(el))
    })
    return unique1.map(el => JSON.parse(el))
}

console.log(uniqueFunc1())
