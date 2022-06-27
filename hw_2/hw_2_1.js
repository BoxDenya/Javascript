/* 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень,
в которую будет возводиться число 2*/

function expon (a, b){   

    for (let i = 1; i <= b; i++){
        result = a**i;
        console.log(result)
    }
}

expon (3, 10)