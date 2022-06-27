/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль,
 сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'
Метод includes() определяет, содержит ли массив определённый элемент,
возвращая в зависимости от этого true или false.*/

/*option one*/

function getWorldStructure(world) {
    let vowels = 'aeiouy'.split('')
    let consonants = 'bcdfghjklmnpqrstvwxz'.split('')

    let vowelsCount = 0
    let consonantsCount = 0

    for(let char of world.toLowerCase()){
        if(vowels.includes(char)) vowelsCount++
        else if(consonants.includes(char)) consonantsCount++
    }
    console.log(`В слове ${world} : ${vowelsCount} гласных и ${consonantsCount} согласных`)

}

// getWorldStructure('Check-list')

/*option two*/

function getWorldStructure2(world) {
    console.log(`В слове ${world} содержится ${world.match(/[aeiouy]/gi) ? (world.match(/[aeiouy]/gi)).length : 0} гласных и ${world.match(/[bcdfghjklmnpqrstvwxz]/gi) ? (world.match(/[bcdfghjklmnpqrstvwxz]/gi)).length : 0} согласных букв`)
}

getWorldStructure2('aae')