/**
 * Return the count for the number of arrays inside a given array.
 * @param {Array} arr - The array to count the number of arrays in
 * @returns {Number} - The number of arrays in the given array
 * */
const countNumberOfArrays = (arr) => {
    let counter = 0; // counter

    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i])) counter++ // if the element is an array, increment the counter
    return counter;
}

module.exports = countNumberOfArrays;