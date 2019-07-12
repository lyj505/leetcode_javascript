// 3. Longest Substring Without Repeating Characters
// Medium

// 5795

// 330

// Favorite

// Share
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

//fuck 理解错了 - - 而是要不重复的....字符串
/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLongestSubstring = function (s) {
//     //abcdefg
//     //只需要从一半
//     let length = s.length;
//     let borderL = Math.ceil(length);
//     if (s === "") {
//         return 0;
//     }
//     //排列组合所有 组合起来
//     const container = {};

//     while (borderL > 0) {
//         let l = 0; r = l + borderL;
//         while (r >= l && r <= length) {
//             const key = s.substring(l, r);
//             if (container[key] == undefined) {
//                 container[key] = 1;
//             } else {
//                 container[key] = ++container[key];
//             }
//             r++;
//             l++;
//         }
//         borderL--;
//     }

//     console.log(container)
//     let keyLength = 1;
//     let keyCount = 0;
//     Object.keys(container).map((key) => {
//         const count = container[key];
//         const keyL = key.length;
//         if (count > keyCount && key.substr(0, 1).repeat(key.length) !== key && key.length > 1) {
//             console.log(key);
//             keyCount = count;
//             keyLength = key.length;
//         }
//     })

//     return keyLength
// };




// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"


const lengthOfLongestSubstring = function (s) {
    let l = 0;
    let r = s.length;
    let str = '';

    for (let i = 0; i < s.length; i++) {
        let temp = '';
        for (let j = i; j < s.length; j++) {
            if (temp.indexOf(s[j]) == -1) {
                temp += s[j];
            } else {
                break;
            }
        }
        if (temp.length > str.length) {
            str = temp;
        }
    }

    return str.length;
}
