// code your solution here
function superbowlWin(record) {
    function isWinningYear(year) {
        return year.result === "W"
    }

    const winningYearObject = record.find(isWinningYear)

    if (winningYearObject) {
        return winningYearObject.year
    }
}

// function superbowlWin(record) {
//     return record.find((year) => year.result === "W")?.year
// }