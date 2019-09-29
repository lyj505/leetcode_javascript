// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//     Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//     Note:

// All given inputs are in lowercase letters a - z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonStr = '';
    let flag = true;
    let startIndex = 1;
    if (strs.length === 0 || strs.length === 1) {
        return strs[0] ? strs[0] : '';
    }
    while (flag) {
        const ct = strs[0].substr(0, startIndex);
        if (ct == '') {
            flag = false;
        }
        let maxL = ct.length;
        for (let i = 1; i < strs.length; i++) {
            const l = strs[i].substr(0, startIndex);
            maxL = Math.max(maxL, strs[i].length)
            if (ct != l) {
                flag = false;
                break;
            }
        }
        flag && (commonStr = ct);
        startIndex++;
        if (commonStr.length >= maxL) {
            flag = false;
        }
    }
    return commonStr;
};

longestCommonPrefix(["c", "c"]);