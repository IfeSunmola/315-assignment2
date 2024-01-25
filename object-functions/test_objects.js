// Basic test script for object functions

const matches = [
    {winner: 'Alice', loser: 'Bob', loser_points: 3},
    {winner: 'Carol', loser: 'Dean', loser_points: 1},
    {winner: 'Elise', loser: 'Bob', loser_points: 2},
    {winner: 'Elise', loser: 'Carol', loser_points: 4},
    {winner: 'Alice', loser: 'Carol', loser_points: 2},
    {winner: 'Carol', loser: 'Dean', loser_points: 3},
    {winner: 'Dean', loser: 'Elise', loser_points: 2},
]

function isSameData(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i]) return false;
    return true;
}

console.log("Participants Test")
const participants = require("./participants");
const participantResult = participants(matches)
console.log(isSameData(participantResult, ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']))

console.log("Winners Object Test")
const winnersObject = require("./winnersObject");
const winnersResult = winnersObject(matches)
console.log(winnersResult)

console.log("Biggest loser test")
const biggestLoser = require("./biggestLoser");
console.log(biggestLoser(matches) === "Bob")