// Given a 32 - bit signed integer, reverse digits of an integer.

//   Example 1:
// Input: 123
// Output: 321


// Example 2:
// Input: -123
// Output: -321


// Example 3:
// Input: 120
// Output: 21


// Note:
// Assume we are dealing with an environment which could only store integers within the
// 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this problem, 
//assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */


var reverse = function (x) {
  x = Number(String(x).replace(/0+$/g, ''));
  let isMinus = x < 0;
  x = Math.abs(x);
  // if (x >= 231) { return 0 }
  const arr = x.toString().split('');
  const isEven = arr.length % 2 === 0;
  let middleEl = (isEven ? arr.length / 2 : Math.ceil(arr.length / 2));
  if (isEven) arr.splice(middleEl, 0, 'x');
  let interval = 1;
  let i = middleEl;
  for (; i > 0; i--) {
    swap(arr, middleEl - interval, middleEl + interval);
    interval++;
  }
  if (isEven) arr.splice(middleEl, 1);
  let rtNum = parseInt(arr.join(''));
  isMinus && (rtNum = -(rtNum));
  if (rtNum < (-Math.pow(2, 31)) || rtNum > (Math.pow(2, 31) - 1)) { rtNum = 0 }
  console.log(rtNum)
  return rtNum;
};

function swap(arr, prevIndex, nextIndex) {
  const temp = arr[nextIndex];
  arr[nextIndex] = arr[prevIndex];
  arr[prevIndex] = temp;
}

{


  /**
   * @param {number} x
   * @return {number}
   */
  const reverse = function (x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let result = 0;

    while (x) {
      const digit = x % 10;
      x = Math.floor(x / 10);
      result = result * 10 + digit;
    }

    // restrict result to maintain settled overflow
    if (result > 2 ** 31) {
      return 0;
    }

    return isNegative ? -result : result;
  };

  console.log(reverse(123134));

}


reverse(123)