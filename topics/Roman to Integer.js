// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together.
// Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3



// Input: "MCMXCIV"
// Output: 1994


//1000 + 100 + (500 -100)+10 

// const symbolEnum = {
//     1: {
//         I: 1,
//         V: 5
//     },
//     2: {
//         X: 10,
//         L: 50
//     },
//     3: {
//         C: 100,
//         D: 500
//     },
//     4: {
//         M: 1000
//     }
// }



/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let l = s.length;
    let position = 0;
    let number = 0;
    while (position < l) {
        let prev = position - 1 < 0 ? null : s.substr(position - 1, 1);
        let ew = s.substr(position, 1);
        let next = s.substr(position + 1, 1);
        if (position + 1 > l) {
            break;
        }
        while (ew === "M") {
            if (prev && prev === "C") {
                number += 900;
            } else {
                number += 1000
            }
            break;
        }
        while (ew === "D") {
            if (prev && prev === "C") {
                number += 400
            } else {
                number += 500
            }
            break;
        }

        while (ew === "C") {
            if (prev && prev === "X") {
                number += 90
            } else if (next && next == "M") {
                number += 900;
                position++;
            } else if (next && next == "D") {
                number += 400;
                position++;
            } else {
                number += 100
            }
            break;
        }

        while (ew === "L") {
            if (prev && prev === "X") {
                number += 40
            } else {
                number += 50
            }
            break;
        }


        while (ew === "X") {
            if (prev && prev === "I") {
                number += 9
            } else if (next && next == "C") {
                number += 90;
                position++;
            } else if (next && next == "L") {
                number += 40;
                position++;
            } else {
                number += 10
            }
            break;
        }

        while (ew === "V") {
            if (prev && prev === "I") {
                number += 4
            } else {
                number += 5
            }
            break;
        }

        while (ew === "I") {
            if (next && next == "X") {
                number += 9;
                position++;
            } else if (next && next == "V") {
                number += 4;
                position++;
            } else {
                number += 1;
            }
            break;
        }
        position++;
    }
    console.log(number)
    return number;
};




// var romanToInt = function (s) {
//     let returnVal = 0;
//     for (let i = 1; i <= s.length; i++) {
//         if (convert(s[i - 1]) < convert(s[i])) {
//             returnVal -= convert(s[i - 1]);
//         } else {
//             returnVal += convert(s[i - 1]);
//         }
//     }
//     return returnVal;
// };

// var convert = function (s) {
//     if (s === 'I') return 1;
//     if (s === 'V') return 5;
//     if (s === 'X') return 10;
//     if (s === 'L') return 50;
//     if (s === 'C') return 100;
//     if (s === 'D') return 500;
//     if (s === 'M') return 1000;

// }

// console.log(romanToInt("MCMXCIV"));