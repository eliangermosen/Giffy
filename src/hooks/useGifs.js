import {useState,useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({keyword} = {keyword: null}) {//valor pordefecto null
    const [loading, setLoading] = useState(false)
    // const [gifs, setGifs] = useState([])
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function () {
        setLoading(true)
        
        //si viene la keyword se le asginara el valor si no la ultima busqueda en storage y si nunca se busca nada sera random
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword en el local storage
                localStorage.setItem('lastKeyword',keyword)
            })
    },[keyword, setGifs])

    return {loading, gifs}
}