const LPS = require('../topics/Longest Palindromic Substring');

const testList = [
    {
        origin: 'a',
        expect: 'a',
    }, {
        origin: 'bb',
        expect: 'bb',
    },
    // {
    //     origin: 'babad',
    //     expect: 'aba',
    // },
    // {
    //     origin: 'cbbd',
    //     expect: 'bb',
    // },
    // {
    //     origin: 'abb',
    //     expect: 'bb'
    // },

    // {
    //     origin: 'ac',
    //     expect: 'a'
    // },

    // {
    //     origin: "ccd",
    //     expect: 'cc'
    // },
    //  {
    //     origin: "adam",
    //     expect: 'ada'
    // }
]


testList.forEach(element => {
    test(`期待 ${element.origin} 的结果是 ${element.expect}`, () => {
        expect(LPS(element.origin)).toBe(element.expect);
    })
});

