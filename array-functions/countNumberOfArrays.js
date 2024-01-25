const countNumberOfArrays = (arr) => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i])) counter++
    return counter;
}

module.exports = countNumberOfArrays;