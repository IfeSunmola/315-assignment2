const biggestLoser = (matches) => {
    let tracker = {} // to keep track of the scores, and names

    for (let i = 0; i < matches.length; i++) {
        const match = matches[i]

        // add everyone, their scores will be updated
        if (!tracker[match.winner]) tracker[match.winner] = 0
        if (!tracker[match.loser]) tracker[match.loser] = 0

        if (match.winner) // winner gets points
            tracker[match.winner] = tracker[match.winner] + match.loser_points;

        else // loser loses points
            tracker[match.winner] = tracker[match.winner] - match.loser_points;
    }

    // find the lowest point and return the key
    // https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object
    let smallest = ""
    for (let [key, value] of Object.entries(tracker)) {
        if (!smallest) smallest = key
        if (value < tracker[smallest]) smallest = key
    }
    return smallest

}

module.exports = biggestLoser;