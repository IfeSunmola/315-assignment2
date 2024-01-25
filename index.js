const findNaNIndex = require('./array-functions/findNaNIndex');
const isArrayFactorChain = require('./array-functions/isArrayFactorChain');
const countNumberOfArrays = require('./array-functions/countNumberOfArrays');

const participants = require("./object-functions/participants");
const winnersObject = require("./object-functions/winnersObject");
const biggestLoser = require("./object-functions/biggestLoser");

module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays,

    participants,
    winnersObject,
    biggestLoser
}