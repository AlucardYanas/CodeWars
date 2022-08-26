// задача 1 Complementary DNA

// dna.A = 12345;

// Object.values(dna)
// Object.keys(dna)
// Object.entries(dna)

// Object.freeze
// Object.seal

// const o1 = {
//     a: 1,
//     b: 2,
// }

// const o2 = {
//     b: 3,
//     c: 4,
// }

// const o3 = {
//     d: 10,
// }


// Object.assign(o1, o2, o3);

// o1 === {
//     a: 1,
//     b: 3,
//     c: 4,
//     d: 10,
// }

// 1    Number
// 6n   BigInt
// true Boolean
// "qwer" String

// Symbol.toPrimitive 
// undefined 
// null


// Symbol()


// {} 


// // const key = "T"
// dna[key] === "A"
// // dna.key === "A"

// dna

const dnaObj = Object.freeze({
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
});

function DNAStrand(dna) {
    return dna
        .split('')
        .map(letter => dnaObj[letter])
        .join("");
}


console.log(DNAStrand('AATTCCGG'));

// assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")


// Задача 2 Convert the score
const matchScore = {
    "nil": 0,
    "two": 2,
    "three": 3,
    "four": 4,
};

function scoreboard(string) {
    return string
        .split(' ')
        .filter(score => matchScore.hasOwnProperty(score))
        .map(score => matchScore[score]);
}

console.log(scoreboard("The score is four nil"));

//   Test.assertSimilar(scoreboard("The score is four nil"), [4,0], "Should return: [4,0]");
// Test.assertSimilar(scoreboard("new score: two three"), [2,3], "Should return: [2,3]");
// Test.assertSimilar(scoreboard("two two"), [2,2], "Should return: [2,2]");
// Test.assertSimilar(scoreboard("Arsenal just conceded another goal, two nil"), [2,0], "Should return: [2,0]");

// задача 3 The Office 1 - Outed 

let dictionary = {
    'tim': 1,
    'jim': 3,
    'randy': 9,
    'sandy': 6,
    'andy': 7,
    'katie': 6,
    'laura': 9,
    'saajid': 9,
    'alex': 9,
    'john': 9,
    'mr': 8
};
const boss = 'katie';


function outed(meet, boss) {

    let colleaguesVoices = 0;
    let meetLength = 0;

    for (let kea in meet) {
        // kea === boss ? colleaguesVoices += meet[kea] * 2 : colleaguesVoices += meet[kea];
        colleaguesVoices += kea === boss ? meet[kea] * 2 : meet[kea];

        meetLength++;
    }

    const overallHapappiness = colleaguesVoices / meetLength;

    return overallHapappiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';

}

console.log(outed(dictionary, boss));



// Задача 4  Who's Online?

const friendsStatus = [{ username: 'David', status: 'online', lastActivity: 10 },
    { username: 'Lucy', status: 'online', lastActivity: 0 },
    { username: 'Bob', status: 'online', lastActivity: 3 },
    { username: 'Julie', status: 'offline', lastActivity: 104 },
    { username: 'Lenny', status: 'online', lastActivity: 38 }
];

function whosOnline(friends) {

    const finalStatus = {};

    for (const friend of friends) {
        if (friend.status === 'online' && friend.lastActivity <= 10) {
            if (finalStatus.online === undefined) {
                finalStatus.online = [];
            }
            finalStatus.online.push(friend.username);
        }
        if (friend.status === 'offline') {
            if (finalStatus.offline === undefined) {
                finalStatus.offline = [];
            }
            finalStatus.offline.push(friend.username);
        }
        if (friend.lastActivity > 10 && friend.status === 'online') {
            if (finalStatus.away === undefined) {
                finalStatus.away = [];
            }
            finalStatus.away.push(friend.username);
        }
    }
    return finalStatus;
}

console.log(whosOnline(friendsStatus));


// Задача 5 Make a function that does arithmetic!

const arithmeticOperators = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => a / b
};

const firstArg = 8;
const secondArg = 4;
const sign = "divide";

function arithmetic(x, y, operator) {
    const result = arithmeticOperators[operator](x, y);
    return result;
}

const arithmetic = (a, b, operator) => ({
    'add': a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide': a / b
}[operator]);

console.log(arithmetic(firstArg, secondArg, sign));


// Задача 6 Where my anagrams at?
const anagramWord = 'abba';
const arrayOfAnagrams = ['aabb', 'abcd', 'bbaa', 'dada'];


function isAnagram(word1, word2) {
    const letters1 = {};
    const letters2 = {};

    for (const letter of word1) {
        if (letters1[letter] === undefined) {
            letters1[letter] = 0;
        }
        letters1[letter]++;
    }

    for (const letter of word2) {
        if (letters2[letter] === undefined) {
            letters2[letter] = 0;
        }
        letters2[letter]++;
    }
    const letters1Length = Object.keys(letters1).length;
    const letters2Length = Object.keys(letters2).length;

    if (letters1Length !== letters2Length) {
        return false;
    }

    for (const kea in letters1) {
        if (letters1[kea] !== letters2[kea]) {
            return false;
        };
    };
    return true;

}

function anagrams(word, words) {

    return words.filter(word1 => isAnagram(word, word1));
}

console.log(anagrams(anagramWord, arrayOfAnagrams));


//задача 7 Pluck

function pluck(objs, name) {

    const sequence = [];

    for (let object of objs) {

        if (name in object) {
            sequence.push(object[name]);
        }
        if (object[name] === undefined) {
            sequence.push(undefined);
        }
    }
    return sequence;
}


console.log(pluck([{ a: 1 }, { a: 2 }], 'a'));


//задача 8 Remove duplicate words

function removeDuplicateWords(s) {

    let arrayedString = s.split(' ');

    const noDublicates = {};

    for (const word of arrayedString) {
        if (noDublicates[word] === undefined) {
            noDublicates[word] = 0;
        }
        noDublicates[word]++;
    }
    return Object.keys(noDublicates).join(' ');

};

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));


//Задача 9 Find the unique number

function findUnique(numbers) {
    const noDublicates = {};

    for (let word of numbers) {
        if (noDublicates[word] === undefined) {
            noDublicates[word] = 0;
        }
        noDublicates[word]++;
    }

    for (const dublicates in noDublicates) {
        if (noDublicates[dublicates] > 1) {
            delete noDublicates[dublicates];
        }
    }

    const digitedNoDublicates = Object.keys(noDublicates);
    return Number(digitedNoDublicates.join(""));

};

console.log(findUnique([
    1, 8, 4, 4,
    6, 1, 8
]))


// задача 10 Coding Meetup #2

function greetDevelopers(list) {

    const greetings = [];

    for (const developers of list) {
        developers['greeting'] = `Hi ${developers. firstName}, what do you like the most about ${developers.language}?`
        greetings.push(developers);

    }
    return greetings;
}

console.log(greetDevelopers([{
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
    },
]));


// Задача 11 Convert Hash To An Array

function convertHashToArray(hash) {
    return Object.entries(hash).sort(function(a, b) {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
    })
}

console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }));

// Задача 12  My Language Skills

function myLanguages(results) {
    return Object.keys(results)
        .filter(r => results[r] > 59)
        .sort((a, b) => results[b] - results[a])

    // const sortedLanguages = [];

    // for (language of languages) {
    //     if (language[1] > 59) {
    //         sortedLanguages.push(language[0]);
    //     };
    // };
};

console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }));
console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }))


// Задача 13  Double Sort

function dbSort(a) {
    // const arithmeticOperators = {
    //     stringSort: sort((a, b) => a - b),
    //     digitsSort: sort((a, b) => a - b),
    // };

    // for(data in a) {
    //     if(data == 'string'){
    //         arithmeticOperators.stringSort
    //     }
    // }

    let stringsArray = a.filter(n => typeof(n) == 'string')
        .sort();
    let digitsArray = a.filter(i => typeof(i) == 'number')
        .sort((x, y) => x - y);

    return digitsArray.concat(stringsArray);
}

console.log(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]));


// задача 14 Convert A Hex String To RGB

function decimalToRgb(decimal) {
    return {
        r: (decimal >> 16) & 0xff,
        g: (decimal >> 8) & 0xff,
        b: decimal & 0xff,
    };
}

function hexStringToRGB(hexString) {

    const digitedHexString = hexString.slice(1);

    const decimalNumber = parseInt(digitedHexString, 16);

    return decimalToRgb(decimalNumber);

}

console.log(hexStringToRGB("#FF9933"));

// Задача 15 Super power frequency function

function frequency(arr, options) {

}

//Задача 16