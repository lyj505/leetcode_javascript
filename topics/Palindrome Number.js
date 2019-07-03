// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (Number(x) < 0) {
        return false;
    }
    const arr = String(x).split('');
    let flag = true;
    let l = 0; r = arr.length - 1;
    for (; r != l; l++) {
        if (arr[l] !== arr[r]) {
            flag = false;
            break;
        }
        if (r-- && r == l) {
            break;
        }
    }
    return flag;
};

console.log(isPalindrome())

//网友算法
{
    var isPalindrome = x => {
        if (x < 0) return false

        let left = 1
        while (Math.pow(10, left) <= x) {
            left++
        }

        let right = 1
        while (left > right) {
            //123   123/100 %10 -->1     123/1 %10 ---> 3     对比1 == 3
            const leftDigit = Math.floor(x / Math.pow(10, left - 1)) % 10
            const rightDigit = Math.floor(x / Math.pow(10, right - 1)) % 10
            if (leftDigit !== rightDigit) return false
            left--
            right++
        }
        return true
    }
}