import {useState,useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;

export function useGifs ({ keyword, rating } = { keyword: null }) {//valor pordefecto null
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    // const [gifs, setGifs] = useState([])
    const {gifs, setGifs} = useContext(GifsContext)

    //si viene la keyword se le asginara el valor si no la ultima busqueda en storage y si nunca se busca nada sera random
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    useEffect(function () {
        setLoading(true)

        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword en el local storage
                localStorage.setItem('lastKeyword',keyword)
            })
    },[keyword, keywordToUse, setGifs, rating])

    useEffect(function(){
        // cuando initial page sea igual a 0 no hara nada
        if(page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({keyword:keywordToUse, page, rating})
            .then(nextGifs => {
                // esta funcion que le pasamos devuelve el estado anterior
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    },[page, keywordToUse, setGifs, rating])

    return {loading, loadingNextPage, gifs, setPage}
}