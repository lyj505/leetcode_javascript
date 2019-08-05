// Given n non-negative integers a1, a2, ..., an , where each represents a point at
//coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i
// is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container,
// such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.





// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.



// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} arr
 * @return {number}
 */
// var maxArea = function (arr) {
//     //not just easy filter it exit a problem about how to confirm the border
//     let left = 0;
//     let right = arr.length - 1;
//     let maxContainer = 0;
//     let containerArea = 0;
//     if (arr.length == 2) {
//         return Math.min(arr[0], arr[1]);
//     }
//     while (right > left) {
//         //cache el
//         const startEl = arr[left];
//         const endEl = arr[right];
//         const filterArr = arr.slice(left + 1, right).filter((el) => {
//             return el <= startEl && el <= endEl;
//         });
//         //calc sum

//         const curCo = filterArr.length > 0 ? filterArr.reduce(function (a, b) { return a + b }) : 0;
//         curCo > maxContainer && (maxContainer = curCo) && (containerArea = (right - left) * Math.min(startEl, endEl));
//         // move pointer
//         startEl < endEl && left++;
//         startEl > endEl && right--;
//         startEl == endEl && left++;
//     }
//     return containerArea
// };

var maxArea = function (height) {
    //find the fucking regular
    let i = 0
    let j = height.length - 1
    let maxArea = 0
    while (i !== j) {
        let area
        if (height[i] <= height[j]) {
            area = height[i] * (j - i)
            i++
        }
        else if (height[j] < height[i]) {
            area = height[j] * (j - i)
            j--
        }
        if (area > maxArea) {
            maxArea = area
        }
    }
    return maxArea
};



maxArea([1, 2, 1]);
