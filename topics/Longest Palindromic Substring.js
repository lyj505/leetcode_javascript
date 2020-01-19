// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.
//最长的回文字符串
// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//     Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let left = 0, right = s.length - 1, v_start = null, v_end = null;
    if (left >= right) {
        return s;
    }
    while (left < right) {
        if (s[left] === s[right]) {
            if (v_start === null) {
                v_start = left;
                v_end = (right === s.length - 1 - (left + s.length - 1 - right) ? right + 1 : right);
            }
            left++;
            right--;
        } else {
            //这里面的算法是有问题的,是根据常识的最长,而不是理论的最长长度

            // v_start = null;
            if (s[left + 1] != null && s[right - 1] != null) {
                const leftContain =
                    s[left + 1] === s[left]
                // s.substr(left + 1, right).indexOf(s[left]) > -1;
                const rightContain =
                    s[right - 1] === s[right]
                // s.substr(left, right - 1).indexOf(s[right]) > -1;
                if (leftContain && rightContain) {
                    left++;
                    right--;
                } else if (leftContain) {
                    right--;
                } else if (rightContain) {
                    left++;
                } else {
                    left++;
                    right--;
                }
            }


        }
    }

    const str = v_start === null ? s[0] : s.substr(v_start, v_end);
    return str
};

module.exports = longestPalindrome;
