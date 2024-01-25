# CMPT 315 Assignment 2

## Purpose

Develop a basic JavaScript library similar to Lodash that provides functions to manipulate arrays and objects.
This project is designed to be completed within two hours and will focus on JavaScript programming skills.
The aim is to understand and implement fundamental array and object manipulation methods.

## Documentation

The following functions are implemented:

- `findNaNIndex(arr)`: Find all the indexes where NaN is found in a given array of numbers and NaN.
- `isArrayFactorChain(arr)`: Return true or false if an array is a factor chain or not.
- `countNumberOfArrays(arr)`: Return the count for the number of arrays inside a given array.
- `participants(obj)`: Returns an array of all the player names (no player should be listed more than once).
- `winnersObject(obj)`: Returns an object which lists each participant, and a list of who they've beaten.
- `biggestLoser(obj)`: Returns the loser name with the biggest tally of loser_points. If a player is the winner, the loser_points are subtracted, and
  if a player is a loser, then the loser_points are added. Find the player with the largest tally of loser_points.

## Test Scripts

- `npm run test-arrays`
- `npm run test-objects`

