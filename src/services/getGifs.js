import {API_KEY, API_URL} from './settings'

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

export default function getGifs ({ limit = 5, keyword = 'morty', page = 0} = {}) {//valor por defecto es un objeto vacio y si no llega nada sera morty
  //offset: cuantos resultados me tengo que saltar de los resultados que devolvera
  //multiplicamos la pagina por el limite. limite es la cantidad de resultados que devolvera
  const apiURL= `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
}