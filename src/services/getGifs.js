const apiKey = "QZcf6ZcGaWKhiKYXFRuTPWBOlc1TJdAz"

export default function getGifs ({keyword = 'morty'} = {}) {//valor por defecto es un objeto vacio y si no llega nada sera morty
  const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response;
        if(Array.isArray(data)){
            const gifs = data.map(image => {
                const {images, title, id} = image 
                const {url} = image.images.downsized_medium
                return {title, id, url} 
            })
            return gifs
        }
      })
}