// You are given a string, s, and a list of words, words, that are all of the same length.
//Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

//你被给予了一个字符串,s,和一个array类型的words,数组中的字符串都是相同的长度

//在s中找到所有子字符串的起始索引，该索引是单词中每个单词的一次连接，并且不包含任何中间字符。

// Example 1:

// Input:
// s = "barfoothefoobarman",
//     words = ["foo", "bar"]
// Output: [0, 9]
// Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.

//从索引0和索引9开始的子字符串分别是“barfoor”和“foobar”。

// The output order does not matter, returning[9, 0] is fine too.
//     Example 2:

// Input:
// s = "wordgoodgoodgoodbestword",
//     words = ["word", "good", "best", "word"]
// Output: []


var findSubstring = function (s, words) {

    var keyMap = {},
        arrLen = words.length,
        sLen = s.length,
        wordLen = words[0].length, //All word in words has the same length;
        totalLen = wordLen * arrLen,
        result = [],
        index;

    if (sLen < totalLen) {
        return result;
    }

    //Create hashmap using object in javascript
    for (index = 0; index < arrLen; index++) {
        keyMap[words[index]] = keyMap.hasOwnProperty(words[index]) ? keyMap[words[index]] + 1 : 1;
    }
    console.log(keyMap)

    outerloop:
    for (index = 0, boundary = sLen - totalLen; index < boundary; index++) {

        var resultMap = {}, key, isEqual = true;

        for (var n = 0; n < arrLen; n++) {
            key = s.substring(index + wordLen * n, index + wordLen * n + wordLen);
            console.log('-------', key, keyMap.hasOwnProperty(key));
            console.log(index)
            if (keyMap.hasOwnProperty(key)) {
                resultMap[key] = resultMap.hasOwnProperty(key) ? resultMap[key] + 1 : 1;
            } else {
                continue outerloop;
            }
        }

        //Compare two maps, if the same save the index as one of the anwser. Since keyMap has every property in resultMap, only need to loop keyMap;
        for (var inst in keyMap) {
            if (keyMap[inst] !== resultMap[inst]) {
                isEqual = false;
                continue outerloop;
            }
        }
        console.log('maploop', resultMap, isEqual);

        if (isEqual) {
            result.push(index);
            index += totalLen - 1;
        }
        console.log('外层循环idx', index);
    }

    return result;

};
const r = findSubstring('barfoothe', ['bar', 'foo']);
console.log(r);