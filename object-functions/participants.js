const participants = (matches) => {
    let result = []
    for (let i = 0; i < matches.length; i++) {
        const player = matches[i];
        if (!result.includes(player.winner)) result.push(player.winner)
        if (!result.includes(player.loser)) result.push(player.loser)
    }
    return result
}

module.exports = participants;