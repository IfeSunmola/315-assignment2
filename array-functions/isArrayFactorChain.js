/**
 * @param {Array} arr - array of numbers
 * @returns {Boolean} - true if the array is a factor chain, false otherwise
 * */
const isArrayFactorChain = (arr) => {
    // loops through and breaks out of the loop if the next element is not divisible by the current element
    for (let i = 0; i < arr.length && i + 1 < arr.length; i++)
        if (arr[i + 1] % arr[i] !== 0) return false;

    return true;
}

module.exports = isArrayFactorChain;