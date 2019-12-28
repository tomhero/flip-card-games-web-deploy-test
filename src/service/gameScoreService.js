/* eslint-disable no-console */
const host = process.env.VUE_APP_API_HOST || '35.227.148.145'
const port = process.env.VUE_APP_API_PORT || '9000'
const apiKey = process.env.VUE_APP_API_KEY || 'be511834-5b8c-480f-98f0-8b741d3a4d65'
const apiVersion = process.env.VUE_APP_API_VERSION || 'v1'

const apiUrl = `http://${host}:${port}/api/${apiVersion}/highscore/${apiKey}`

export function getGlobelHighestScore() {
  return fetch(apiUrl, { mode: 'cors' }).then(response => response.json())
}

export function sendPlayerHighScore(score) {
  return fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      playerHighscore: score
    })
  }).then(response => response.json())
}