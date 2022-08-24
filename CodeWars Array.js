// {
//     "esversion": 6
//   }


//задача 1 сумма позитивных чисел
let arr = [1, 5, 7];

function positiveSum(arr) {
    const positiveNumbers = arr.filter(number => number > 0);
    let sum = 0;
    for (const number of positiveNumbers) {
        sum += number;
    }
    return sum;
}

console.log(positiveSum(arr));

console.log("qwe rt uiog".split(" "));

// задача 2 найти короткое слово

const sentence = "один два трии четыре пять";

function findShortestWord(sentence) {
    const words = sentence.split(' '); // разбиваем строку на массив строк и записываем в переменную
    let shortestWordLength = words[0].length; //устанавливаем первое слово в массиве как самое короткое

    for (const word of words) {
        if (word.length < shortestWordLength) {
            shortestWordLength = word.length;
        }
    }
    return shortestWordLength;
}
console.log(findShortestWord(sentence));


//задача 3 вывести только числа

let list = [1, 2, 'aasf', '1', '123', 123];

function filterList(l) {
    return l.filter(i => typeof i == 'number'); //фильтруем объекты внутри массива по типу и выбираем тольок числа
}

console.log(filterList(list));


//задача 4 выводить имя в пределах 4 строк


let friends = ["A", "Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];

function findFriend(friends) {
    let goodFriends = [];
    for (const friend of friends) {
        if (friend.length == 4) {
            goodFriends.push(friend);
        }
    }
    return goodFriends;
}
console.log(findFriend(friends));


// задача 5 возвращаем гласные
let str = "abracadabraeisiouty";

function vowelsOnly(str) {
    let vowelsCounter = 0;
    for (const letter of str) {
        if (letter === 'a' || letter === 'e' || letter === 'i') {
            vowelsCounter += 1;
        }
    }
    return vowelsCounter;
}

console.log(vowelsOnly(str));


console.log(min([1, 2, 3, 4, 5], 'value')); // => 1
console.log(min([1, 2, 3, 4, 5], 'index')); // => 0


// задача 6 вернуть самое малое чиссло в массиве или его индекс

const arrSample = [2, 3, 4, 1];

function min(numbers, type) {
    let value = Math.min(...numbers);
    if (type === 'value') {
        return value;
    }
    if (type === 'index') {
        let index = numbers.indexOf(value);
        return index;
    }
}

console.log(min(arrSample, 'index'));


// задача 7 вернуть индексы всех заглавных букв

const capitalStr = 'thisIsAString';


let capitals = function(string) {
    let arrayOfString = string.split('');

    let capitalIndexarray = [];

    for (let i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i].toUpperCase() === arrayOfString[i]) {
            capitalIndexarray.push(i);
        }
    }
    return capitalIndexarray

}

console.log(capitals(capitalStr))


// задача 8 найти нечетные числа и вставить между ними  -


const stringNum = 1376697;

function insertDash(anystring) {
    const digits = Array.from(String(anystring), Number);
    const result = [];
    for (let i = 0; i < digits.length; i++) {
        result.push(String(digits[i]));
        if (digits[i] % 2 != 0 && (digits[i + 1] % 1 == 0 && digits[i + 1] % 2 != 0)) {
            result.push('-');
        }
    }
    return result.join('');
}

console.log(insertDash(stringNum));




// задача 9 array dot fit Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.


const arr1 = [3, 4, 6, 8];

const arr2 = [3, 5, 7];

function getDifference(firstArray, secondArray) {
    const arr3 = [];

    for (const elem of firstArray) {
        if (!secondArray.includes(elem))
            arr3.push(elem)

    }
    //    const difference = firstArray.filter(x => !secondArray.includes(x));
    return arr3;
}

console.log(getDifference(arr1, arr2));


// задача 10. Лотерея. Каждый подмассив содержит как строку, так и число. Если код любого из символов в строке совпадает с числом, вы получаете мини-выигрыш.
// После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением (выигрышем). Если ваша сумма больше или равна (выигрыш), верните «Победитель!». В противном случае верните «Неудачник!».


const ticketArr = [
    ['HGTYRE', 74],
    ['BE', 66],
    ['JKTY', 74]
];

function bingo(ticket, win) {

    function getWin(string, number) {
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) === number) {
                return true;
            }
        }
        return false
    }

    let totalWinCount = 0;

    for (const [str, code] of ticket) {
        if (getWin(str, code)) {
            totalWinCount++;
        }
    }
    return totalWinCount >= win ? 'Winner!' : 'Looser!';
}

console.log(bingo(ticketArr, 1));



// Задача 11. Сложить каждое второе число в массиве друг с другом и вывести в двух разных массивах

const teamWeights = [15, 5, 5, 10]


function rowWeights(array) {

    let firstTeamTotalWeight = 0;
    let secondTeamTotalWeight = 0;

    array.forEach((n, i) => {
        if (i % 2 === 0) {
            firstTeamTotalWeight += n;
        } else {
            secondTeamTotalWeight += n;
        }
    });

    return [firstTeamTotalWeight, secondTeamTotalWeight];
}

console.log(rowWeights(teamWeights))

// задача 12 (посчитать улыбющиеся лица)


const smileysArray1 = [':D', ':=~)', '~D', ':'];

function countSmileys(arr) {

    function isSmile(string) {
        const firstSymbol = string[0];
        const middleSymbol = string[1]
        const lastSymbol = string[string.length - 1]

        const firstSymbolIsRight = firstSymbol === ":" || firstSymbol === ";"
        const middleSymbolIsRight = middleSymbol === "~" || middleSymbol === "-"
        const lastSymbolIsRight = lastSymbol === ")" || lastSymbol === "D"

        if (string.length === 2) {
            return firstSymbolIsRight && lastSymbolIsRight
        }

        if (string.length === 3) {
            return firstSymbolIsRight && middleSymbolIsRight && lastSymbolIsRight
        }
        return false;
    }

    let totalSmiles = 0;

    for (const smile of arr) {
        if (isSmile(smile)) {
            totalSmiles++;
        }
    }
    return totalSmiles
}

console.log(countSmileys(smileysArray1))


// задача 13 вернуть все варианты строк


function scrollingText(string) {

    const arrayWhithStrings = [];

    for (let i = 0; i < string.length; i++) {

        const newWord = string.slice(1) + string[0]
        string = newWord
        arrayWhithStrings.push(string)
    }
    return arrayWhithStrings

}

console.log(scrollingText('qwerty'))



// задача 14 сложить все числа внутри масивов

let firstArray = [1, 1, 1];

let secondArray = [2, 2, 2];

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, val) => acc + val, 0);
}

console.log(arrayPlusArray([], []));


//задача 15 is every value in arrya is an array?

const arr5 = [
    [],
    [],
    []
]

function arrCheck(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            return false
        }
    }
    return true
}

console.log(arrCheck(arr5))

// задача 16 Square Every Digit

const oldNum = 248;


function squareDigits(num) {

    return +num
        .toString()
        .split("")
        .map(number => number ** 2)
        .join('');


}
console.log(squareDigits(oldNum));

// Задача 17 Flatten and sort an array 

const arr6 = [
    [1, 3, 5],
    [100],
    [2, 4, 6]
];

function flattenAndSort(array) {

    const sortedArray = [].concat(...array).sort(function(a, b) {
        return a - b;
    });

    return sortedArray;
}

console.log(flattenAndSort(arr6));


// Задача 18 build a square

function generateShape(size) {


    const line = "+".repeat(size);
    return Array(size).fill(line).join("\n");


}
console.log([generateShape(3)]);

// Задача 19  Easy; Make a box

const boxSize = 3;

function box(size) {

    const upAndBottomArray = "-".repeat(size);

    const walls = '-' + ' '.repeat(size - 2) + '-';
    const boxArray = Array(size).fill(walls);

    boxArray[0] = upAndBottomArray;

    boxArray[size - 1] = upAndBottomArray;

    return boxArray
}
console.log(box(4));


//Задача 20 Alternate capitalization

function capitalize(string) {

    let arrayOfAString = string.split('');
    let arrayOfEvenCapitals = [];
    let arrayOfOddCapitals = [];

    arrayOfAString.forEach((n, i) => {
        if (i % 2 === 0) {
            arrayOfEvenCapitals.push(n.toUpperCase())
        } else {
            arrayOfEvenCapitals.push(n)
        }
    });

    arrayOfAString.forEach((n, i) => {
        if (i % 2 === 1) {
            arrayOfOddCapitals.push(n.toUpperCase())
        } else {
            arrayOfOddCapitals.push(n)
        }
    });

    arrayOfEvenCapitals = [arrayOfEvenCapitals.join('')]
    arrayOfOddCapitals = [arrayOfOddCapitals.join('')]

    const finalArray = arrayOfEvenCapitals.concat(arrayOfOddCapitals)

    return finalArray
}
console.log(capitalize('abcd'))


//Задача 21 Sort array by string length

const lengthArray = ["Beg", "Life", "I", "To"];

function sortByLength(array) {


    return array.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(lengthArray))


// задача 22 Sort by Last Char

// let x = y.sort((a, b) => a[a.length - 1] > b[b.length - 1]  ? 1 : -1);

// сортируем по возрастанию числа
// a = 6,  b = 78  => вернуть -1, потому что a должно идти раньше b

// сортируем по возрастанию числа
// a = 600,  b = 78  => вернуть 1, потому что a должно идти после b

// сортируем по последней букве слова по убыванию
// a = "qwerty" b = "asd"  => вернуть -1, потому что a должно идти раньше b

// сортируем по последней букве слова по убыванию
// a = "poiuye" b = "zzz"  => вернуть 1, потому что a должно идти позже b
// aStr.at(-1)

let stringLast = 'man i need a taxi up to ubud';

function last(x) {

    let o = x.split(' ').map(function(string, i) {
        return [string, i]
    });

    o.sort(function(a, b) {
        const aStr = a[0];
        const bStr = b[0];

        if (aStr[aStr.length - 1] > bStr[bStr.length - 1]) {
            return 1
        }
        if (aStr[aStr.length - 1] < bStr[bStr.length - 1]) {
            return -1
        }

        const aNum = a[1];
        const bNum = b[1];

        return aNum - bNum;
    })

    // return o.flat().filter(i => typeof i === 'string')
    return o.map(pair => pair[0])

}
console.log(last(stringLast));

function last(x) {

    return x.split(' ').sort(function(a, b) {
        if (a[a.length - 1] > b[b.length - 1]) {
            return 1
        }
        if (a[a.length - 1] < b[b.length - 1]) {
            return -1
        }
        if (a[a.length - 1] === b[b.length - 1]) {
            return 0
        }
    })
}
console.log(last(stringLast));

// задача 23 Two Sum

const arrayOfNumbers = [2, 2, 3];

const targetNumber = 4;

function twoSum(numbers, target) {


    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(arrayOfNumbers, targetNumber));

//задача 24 Birthday I cake

const digit = 900;

const string = 'abcdef';

function cake(x, y) {
    const splittedString = y.split('')

    const evenIndexes = splittedString
        .filter((_, index) => index % 2 === 0)
        .map(letter => letter.charCodeAt())
        .reduce((acc, item) => acc + item, 0)

    const oddIndexes = splittedString
        .filter((_, index) => index % 2 === 1)
        .map(letter => letter.charCodeAt(0) - 96)
        .reduce((acc, item) => acc + item, 0)

    return evenIndexes + oddIndexes > x * 0.7 ? "Fire!" : "That was close!"
}

console.log(cake(digit, string))


// 3 6 5 1 2 9 7 4
// 1 6 5 3 2 9 7 4
// 1 2 5 3 6 9 7 4
// 1 2 3 5
// 1 2 3 4 6 9 7 5
// 1 2 3 4 5 9 7 6
// _ _ _ _ _

// selection sort

// Задача 25  Zipwhith


const firstArray1 = [4, 10, 20, 60]

const secondArray1 = [2, 7, 15, 40]

// // [0, 3, 5, 20]

function divisionOfDigits(digit1, digit2) {
    const division = digit1 % digit2;
    return division
}

function zipWith(fn, a0, a1) {
    const newArray = []
    const arrayLength = Math.min(a0.length, a1.length)

    for (let i = 0; i < arrayLength; i++) {
        newArray.push(fn(a0[i], a1[i]))
    }

    return newArray;
}


// !!Задача 26 Sort the Odd (нечетный)


function sortArray(arr) {
    let odd_iter = arr
        .filter((num) => num % 2 !== 0)
        .sort((a, b) => a - b)
        // .values()


    return arr.map((num) => {
        if (num % 2 !== 0) {
            return odd_iter
        } else {
            return num
        }
    })
}

console.log(sortArray([5, 3, 2, 8, -1, 4]))


// !!задача 27 Sort with a sorting array


arr11 = ['x', 'y', 'z']
arr22 = [1, 2, 0]

function sort(initialArray, sortingArray) {

    let combinedArray = []

    for (i = 0; i < initialArray.length; i++) {
        combinedArray.push([initialArray[i], sortingArray[i]])
    }

    combinedArray.sort(function(a, b) {
        const aNum = a[1];
        const bNum = b[1];

        if (aNum > bNum) {
            return 1
        }
        if (aNum < bNum) {
            return -1
        }
    })

    return filteredArray = [].concat(...combinedArray).filter((_, index) => index % 2 === 0)

};
console.log(sort(arr11, arr22));

//Задача !!28 Length of missing array

const missingArray = [
    [null],
    [null, null, null]
]
const missingArray1 = []
const missingArray5 = null

const missingArray2 = [
    []
]

const missingArray4 = [null]

// If the array of arrays is null [5] or empty [1], the method should return 0.
// When an array in the array is null [4] or empty [2], the method should return 0 too!

function getLengthOfMissingArray(arrayOfArrays) {

    const isNullOrEmpty = array => array === null || array.length === 0;

    if (isNullOrEmpty(arrayOfArrays) || arrayOfArrays.some(isNullOrEmpty)) {
        return 0
    }

    const arrayLengths = arrayOfArrays.map(array => array.length)
    arrayLengths.sort((a, b) => b - a)

    for (let i = 0; i < arrayLengths.length - 1; i++) {
        if (arrayLengths[i] - arrayLengths[i + 1] !== 1) {
            return arrayLengths[i] - 1
        }
    }
}



// Задача 29 Data reverse

let arrayToReverse = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];

function dataReverse(data) {

    const size = 8;

    const subArray = [];

    for (let i = 0; i < data.length; i += 8) {
        subArray.push(data.slice(i, i + size))
    }

    subArray.reverse()

    return reversedArray = [].concat(...subArray)

}

console.log(dataReverse(arrayToReverse))

// Задача 30 Duplicate Encoder

const encodedString1 = 'recede'
const encodedString = 'din'


function duplicateEncode(word) {

    const encodedString = []

    const arrayedString = word.toLowerCase().split('')

    for (let i = 0; i < arrayedString.length; i++) {
        let coincidence = 0
        for (let j = 0; j < arrayedString.length; j++) {
            if (arrayedString[i] === arrayedString[j]) {
                coincidence++
            }
        }
        if (coincidence < 2) {
            encodedString.push('(')
        } else(encodedString.push(')'))
    }

    return encodedString.join('')
}

console.log(duplicateEncode('Success'))

//!!задача 31 Proof Read


function proofread(str) {

    return arrayedString = str.toLowerCase().replaceAll('ie', 'ei')

    // for (let i = 0; i < arrayedString.length; i++) {
    //     if (arrayedString[i] === 'i' && arrayedString[i + 1] === 'e') {
    //         arrayedString[i] = 'e'
    //         arrayedString[i + 1] = 'i'
    //     }
    //     if (i === 0 || arrayedString[i - 2] === '.') {
    //         arrayedString[i] = arrayedString[i].toUpperCase()
    //     }
    // }

    // return arrayedString.join('')
}
console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."))

// задача !!32 Zero-plentiful Array


function zeroPlentiful(arr) {
    let count = 0;
    let inSeq = false;
    let seqLen = 0;

    for (let num of arr) {
        // если текущее число 0
        if (num === 0) {
            // и мы не сканируем последовательность
            if (!inSeq) {
                // сетапимся, взводим флаг что мы в последовательности и ставим длину в 1
                inSeq = true;
                seqLen = 1;
            } else {
                // иначе мы все еще в последовательности, просто инкрементим счетчик длины
                seqLen += 1;
            }
        } else {
            // если число не 0 
            if (inSeq) {
                // и мы сканировали последовательсть
                if (seqLen >= 4) {
                    // и последовательность больше или равна 4 - инкрементируем счетчик
                    // последовательностей и ресетим флаг и счетчик длины последовательности
                    count += 1;
                    inSeq = false;
                    seqLen = 0;
                } else {
                    // длина последовательности меньше 4
                    return 0
                }
            }
        }
    };
    // на случай если мы достигли конец массива находясь в состоянии сканирования
    if (inSeq) {
        if (seqLen >= 4) {
            count += 1;
        } else {
            return 0;
        }
    }
    return count;
}

let curr = 0;
for (const num of arr) {
    if (num === 0) {
        curr++;
    } else {
        curr = 0;
    }
    console.log(curr);
}



//                         0  1  2  3  4  0  0  1  2  3  4  5  0  1  2  3
console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0, 8, 0, 0, 0]))


// задача 33 Element equals its index

function indexEqualsValue(a) {
    let low = 0;
    let high = a.length - 1
    let result = -1;

    if (a.length === 1) {
        return 0
    }

    while (low != high) {
        let offset = Math.floor((low + high) / 2)
        let value = a[offset]

        if (value === offset) {
            result = value
        }

        if (offset <= value) {
            high = offset
        } else {
            if (low === offset) {
                low = offset + 1
            } else {
                low = offset
            }
        }
    }
    return result
}

console.log(indexEqualsValue([-3, 0, 1, 3, 10]))


// задача 33 RGB to hex



// 300 === 1 * 16^2 + 2 * 16^1 + C * 16^0

// 7A4B120

// 7814 === 7 * 10^3 + 8 * 10^2 + 1 * 10^1 + 4 * 10^0  === [7, 8, 1, 4] (10)
// 7814 === 1 * 16^3 + 14 * 16^2 + 8 * 16^1 + 6 * 16^0 === [1, E, 8, 6] (16)

7814..toString(16) === "1E86"

// 10 A
// 11 B
// 12 C
// 13 D
// 14 E
// 15 F

// background: #ff0000 → background: #f00



function toHexadecimal(digit) {

    if (digit < 0) {
        digit = 0
    }
    if (digit > 255) {
        digit = 255
    }


    let digitToString = digit.toString(16).toUpperCase()

    // padStart

    if (digitToString.length === 1) {
        return 0 + digitToString
    } else {
        return digitToString
    }

}

// console.log(toHexadecimal(300))

function rgb(r, g, b) {
    return arrayedDigits = [r, g, b].map(num => toHexadecimal(num))
        .join('')


}

console.log(rgb(300, 255, 255))


//задача 34 Balance cheking

var b1 = `1000.00

125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`


function balance(book) {

    return lines = book.split('\n').filter(function(string) {
        if (string.length > 0) {
            return true
        }
    })



}

console.log(balance(b1))