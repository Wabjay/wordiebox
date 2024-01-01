
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZiMDY0ZmE1ZGI5OTIxMjdkOTVlMTMiLCJlbWFpbCI6IndhYmpheUB1c2VyLmNvbSIsInVzZXJOYW1lIjoid2FiamF5IiwicGFzc3dvcmQiOiIkMmIkMTAkY0JZTUpIVEk0VWFjYUZWUmcxNWtEdWNkNlkzdjdoZGtNdHFQQURoMFBWakRJSHFDVDJJZUciLCJrYXJtYUNyZWRpdCI6NSwiZ2FtZVBvaW50IjowLCJyb2xlIjoiVXNlciIsImlhdCI6MTcwMjQxMzI2NSwiZXhwIjoxNzAyNDk5NjY1fQ.75E_KcUwj12kAARaV5n4StcRRsyZlBz-jpGNpefNH8I'

const userId = '656b064fa5db992127d95e13'

export default async function getUser() {
    const res = await fetch(`https://word-game-dic.cyclic.app/api/users/dashboard/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'X-Custom-Header': 'header value'
        }
      })
    //   .then(json => console.log(JSON.stringify(json)))

    if (!res.ok) throw new Error('failed to fetch user')

    return res.json()
}