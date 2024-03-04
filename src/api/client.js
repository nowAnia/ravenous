const key = process.env['REACT_APP_YELP_API_KEY']

if (key === undefined) {
  throw new Error('REACT_APP_YELP_API_KEY variable is not set. Please provide ApiKey')
}

const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com'
const YELP_API_URL = 'https://api.yelp.com/v3'

const API_URL = `${PROXY_SERVER_URL}/${YELP_API_URL}`

export function callYelpApi(query) {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', authorization: `Bearer ${key}` },
  }

  const promise = fetch(
    `${API_URL}/businesses/search?sort_by=${query.sorting}&limit=20&location=${query.location.length > 0 ? query.location : 'NYC'}&term=${query.search}`,
    options
  )

  return promise
    .then((response) => response.json())
    .catch((err) => {
      return console.error(err)
    })
}
