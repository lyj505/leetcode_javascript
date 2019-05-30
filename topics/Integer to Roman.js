// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1 I II III IV
// V             5 VI VII VIII IX
// X             10   12:XII 27:XXVII
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral,
//  just two one's added together.
//   Twelve is written as, XII, 
//   which is simply X + II. 
//   The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
//  However, the numeral for four is not IIII. Instead, the number four is written
//   as IV. Because the one is before the five we subtract it making four. 
//   The same principle applies to the number nine, which is written as IX. 
//   There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be
//  within the range from 1 to 3999.


// eg Input: 3
// Output: "III"


const numEnum = {
    1: {
        1: "I",
        5: "V",
    },
    2: {
        10: "X",
        50: "L",
    },
    3: {
        100: "C",
        500: "D",
    },
    4: {
        1000: "M"
    }
}
/**
 * @param {number} num
 * @return {string}
 */
// 3999
var intToRoman = function (num) {
    if (num > 3999 || num < 1) {
        return null;
    }

    let positionReal = num.toString().length;

    //相当于把数字给解析了 4位数
    let consult = 1, position = 4, str = '';
    while (position > 0) {
        let positionCur = num.toString().length;
        consult = Math.floor(num / (Math.pow(10, position - 1)));
        if (consult >= 1) {
            console.log(position)
            const currentSymbol0 = numEnum[position][(Object.keys(numEnum[position]))[0]];
            const currentSymbol1 = numEnum[position][(Object.keys(numEnum[position]))[1]];
            const isHighest = positionReal === positionCur;
            switch (consult) {
                case 4:
                    const str4 = currentSymbol0 + currentSymbol1;
                    str = isHighest ? (str4 + str) : (str + str4);
                    break;
                case 9:
                    const prevSymbol = numEnum[position + 1][(Object.keys(numEnum[position + 1]))[0]];
                    const str9 = currentSymbol0 + prevSymbol;
                    str = isHighest ? (str9 + str) : (str + str9);
                    break;
                default:
                    if (consult >= 5) {
                        str += currentSymbol1;
                        str += currentSymbol0.repeat(consult - 5);
                    } else {
                        str += currentSymbol0.repeat(consult);
                    }
                    break;
            }
            num = num - Math.pow(10, position - 1) * consult;
        }
        position--;

    }

    return str;
};

const a = intToRoman(1499);
console.log('--当前数字', a);