const apiKey = "QZcf6ZcGaWKhiKYXFRuTPWBOlc1TJdAz"

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if(Array.isArray(data)){
    const gifs = data.map(image => {
      const {images, title, id} = image
      const {url} = images.downsized_medium
      return {title, id, url}
    })
    return gifs
  }
}

export default function getGifs ({ limit = 25, keyword = 'morty'} = {}) {//valor por defecto es un objeto vacio y si no llega nada sera morty
  const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
}