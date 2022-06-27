/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/

/*version one*/

function isPalindrom(word) {
    word = word.toLowerCase()
    for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--){
        if(word[i] !== word[j]){
            return false
        }
        
    }
    return true
}

// console.log(isPalindrom('abba'))


/*version two*/

function isPalindrom2(world){

   return world.toLowerCase() === world.toLowerCase().split('').reverse().join('')  
     
}    

// console.log(isPalindrom2('Asfvdsbba'))

/*version three*/

function isPalindrom3(world){
    world = world.toLowerCase();
    for(let i = 0; i<=world.length/2; i++) {
        if(world[i] !== world[world.length-1-i])
        return false
    }  
    return true    
}

console.log(isPalindrom3('Abba'))