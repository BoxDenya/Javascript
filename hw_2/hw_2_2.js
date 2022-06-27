/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

/*version one*/

// let result = ''
// let smile = ';)'
// for(let i = 1; i < 5; i++){
//     console.log(result += smile)
// }

/*version two*/

let smile = ';('
for(let i = 1; i < 3; i++) {
    console.log(smile.repeat(i))
}