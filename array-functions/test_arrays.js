function isSameData(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i]) return false;
    return true;
}

console.log("Find NaN Index Test")
const findNaNIndex = require("./findNaNIndex");

const nanResult1 = findNaNIndex([2, NaN, 8, 16, 32])
const nanResult2 = findNaNIndex([2, 4, NaN, 16, 32, NaN])
const nanResult3 = findNaNIndex([2, 4, 16, 32])

console.log(isSameData(nanResult1, [1]))
console.log(isSameData(nanResult2, [2, 5]))
console.log(isSameData(nanResult3, []))

///////////////////////////////////////////////////////////////////////

console.log("Array factor chain Test")
const isArrayFactorChain = require("./isArrayFactorChain");

console.log(isArrayFactorChain([2, 4, 8, 16, 32]))
console.log(isArrayFactorChain([2, 4, 8, 16, 32, 68]))

///////////////////////////////////////////////////////////////////////

console.log("Count number of arrays Test")
const countNumberOfArrays = require("./countNumberOfArrays");
const numArrays1 = countNumberOfArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])
const numArrays2 = countNumberOfArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])

console.log(numArrays1 === 2)
console.log(numArrays2 === 3)