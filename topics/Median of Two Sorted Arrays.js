/**
 * title          Median of Two Sorted Arrays
 * difficulty     hard
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2];
  arr = arr.sort((a, b) => a - b);
  const l = arr.length;
  if (l % 2 !== 0) {
    return arr[Math.ceil(l / 2) - 1];
  } else {
    const prev = arr[(l / 2) - 1];
    const next = arr[(l / 2)];
    return (prev + next) / 2
  }
};

/** 
 * 
 * eg
 * 
*/

const a = findMedianSortedArrays([1, 3], [2]);
console.log(a);