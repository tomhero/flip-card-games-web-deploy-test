/* eslint-disable no-console */
export function getGlobelHighestScore() {
    return {
        "achievedAt": "Wed, 25 Dec 2019 15:28:31 GMT",
        "globalHighscore": null,
        "id": "5e03801ffd3c2c870e80b108"
    }
}

export function sendPlayerHighScore(score) {
    console.log(score)
    return {
        "globalAchievedAt": "Wed, 25 Dec 2019 15:28:31 GMT",
        "globalHighscore": 20,
        "isBreakTheRecord": true,
        "message": "New highscore from player saved successfully!",
        "playerAchievedAt": "Wed, 25 Dec 2019 15:28:31 GMT",
        "status": true
    }
}