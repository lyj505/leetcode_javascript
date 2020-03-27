// Given an input string(s) and a pattern(p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string(not partial).

//     Note:

// s could be empty and contains only lowercase letters a - z.
// p could be empty and contains only lowercase letters a - z, and characters like.or *.
//     Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
//     Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'.Therefore, by repeating 'a' once, it becomes "aa".
//     Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
//     Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time.Therefore, it matches "aab".
//     Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // const patternReg = {
    //     '.': 'i', // any characterF
    //     '*':   //0 or more 
    // }

    const storeMap = {

    }


    //3叉树 每一次消除一些节点
    let key = 0;

    for (let i = 0; i < p.length; i++) {
        let objToArr = Object.getOwnPropertyNames(storeMap);
        let isEmptyObject = objToArr.length === 0;
        if (isEmptyObject) {
            getCurrentStr(p[i], s[i], s[i + 1]);

        } else {
            for (let key in storeMap) {

            }
        }
        // if (p[i] === '.') {

        // } else if (p[i] === '*') {

        // } else {

        // }
    }






};

function getCurrentStr(current_character, currentEl, nextEl) {
    let str = storeMap[key] ? storeMap[key] : '';
    if (current_character === '.') {

        str += currentEl;
    } else if (current_character === '*') {

    } else {

    }
}