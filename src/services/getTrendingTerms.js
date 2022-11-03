import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export default function getTrendingTerms () {
  const apiURL= `${API_URL}/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g&lang=en`

    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
}