/**
 * Returns an object which lists each participant, and a list of who they've beaten.
 *
 * @param {Array} matches
 * @returns {Object} result
 * */
const winnersObject = (matches) => {
    let result = {}
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];

        // for now, just add the winner and loser as keys
        if (!result[match.winner]) result[match.winner] = []
        if (!result[match.loser]) result[match.loser] = []

        // loop through all matches and find the ones where the winner is the current player
        // and add the loser to the array
        let whoTheyBeat = []
        for (let j = 0; j < matches.length; j++) {
            if (matches[j].winner === match.winner) // found a match where the winner is the current winner
                whoTheyBeat.push(matches[j].loser) // add the loser to the array
        }
        result[match.winner] = [...new Set(whoTheyBeat)] // Set removes duplicates
    }
    return result
}

module.exports = winnersObject;