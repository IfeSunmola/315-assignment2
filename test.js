function isSameData(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i]) return false;
    return true;
}

const findNaNIndex = require("./findNaNIndex");
const results1 = findNaNIndex([2, NaN, 8, 16, 32])
const results2 = findNaNIndex([2, 4, NaN, 16, 32, NaN])
const results3 = findNaNIndex([NaN, 3, 4, 16, 32])
const results4 = findNaNIndex([2, 4, 8, 16, 32])

console.log("Find NaN Index Test")
console.log(isSameData(results1, [1]))
console.log(isSameData(results2, [2, 5]))
console.log(isSameData(results3, [0]))
console.log(isSameData(results4, []))