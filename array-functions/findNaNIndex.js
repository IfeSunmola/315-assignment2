/**
 * Find all the indexes where NaN is found in a given array of numbers and NaN.
 *
 * @param {Array} arr - array of numbers and NaN (possibly)
 *  @returns {Array} - array of indexes where NaN is found
 *
 * */
const findNaNIndex = (arr) => {
    let result = []; // start with an empty array

    for (let i = 0; i < arr.length; i++)
        if (isNaN(arr[i])) result.push(i); // if the element is NaN, push the index to the result array
    return result;
}

module.exports = findNaNIndex;