// The string "PAYPALISHIRING" is written in a zigzag pattern
//on a given number of rows like this: 
//(you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"  "PAHN APLSIIG YIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I


function checkHasDone(needLength, remainStr, startIndex) {
    return remainStr.substr(startIndex, needLength).length === needLength;
}


function getFillCorow(number, label = '-') {
    return label.repeat(number).split("")
}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    // [['p', 'a', 't', 'p'], ['', '', 'a', ''], ['', 'l', '', ''],
    // ['i', 's', 'h', 'i'], ['', '', 'r', ''], ['', 'i', '', ''], ['n', 'g', '', '']];

    if (s == '') {
        return "";
    }

    let arrCo = [];
    let step = 0;
    if (s.length <= numRows) {
        return s;
    }

    if (numRows - 1 <= 0) {
        return s;
    }

    while (step < s.length) {
        for (let j = 0; j < numRows - 1; j++) {
            if (j === 0) {
                const isCheckHasDone = checkHasDone(numRows, s, step);
                if (!isCheckHasDone) {
                    if (step >= s.length) {
                        break;
                    }
                    const remain = s.substr(step).split('');
                    arrCo.push([...remain, ...getFillCorow(numRows - remain.length)]);
                    step = s + 1;
                    break;
                } else {
                    arrCo.push(s.substr(step, numRows).split(''));
                    step += numRows;
                }
            } else {
                const isCheckHasDone = checkHasDone(1, s, step);
                if (!isCheckHasDone) {
                    if (step >= s.length) {
                        break;
                    }
                    step = s + 1;
                    arrCo.push([s.substr(step, 1)]);
                    break;
                } else {
                    const rowCo = [...getFillCorow(numRows - 1 - j), s.substr(step, 1), ...getFillCorow(j)]
                    arrCo.push(rowCo);
                    step += 1;
                }
            }
        }

    }

    const rtCo = [];
    for (let i = 0; i < numRows; i++) {
        let arrTemp = [];
        arrCo.forEach(element => {
            element[i] != '-' && arrTemp.push(element[i]);
        })
        rtCo.push(arrTemp);
    }

    let str = '';
    rtCo.map((el) => {
        el.map((ele) => {
            str += ele;
        })
    })
    return str;
};


//what the fuck ????
// Runtime: 288 ms, faster than 5.01 % of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 68.8 MB, less than 5.55 % of JavaScript online submissions for ZigZag Conversion.
// Next challenges:


// console.log(convert('ABCDE', 4))