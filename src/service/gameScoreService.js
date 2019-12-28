/* eslint-disable no-console */
const host = process.env.API_HOST || '35.227.148.145'
const port = process.env.API_PORT || '9000'
// const apiKey = process.env.API_KEY || ''
const apiVersion = process.env.API_VERSION || 'v1'
const apiUrl = `http://${host}:${port}/api/${apiVersion}/highscore`

export function getGlobelHighestScore() {
  return fetch(apiUrl, { mode: 'cors' }).then(response => response.json())
}

export function sendPlayerHighScore(score) {
  return fetch(apiUrl, {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify({
      playerHighscore: score
    })
  }).then(response => response.json())
}