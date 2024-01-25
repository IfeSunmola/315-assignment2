const findNaNIndex = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            result.push(i);
        }
    }
    return result;
}

module.exports = findNaNIndex;