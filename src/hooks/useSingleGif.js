import { useState, useEffect } from "react";
import { useGifs } from "hooks/useGifs";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif({ id }){
    const {gifs} = useGifs()

    const gifFromCache = gifs.find(singleGif => 
        singleGif.id === id
    )

    const [gif, setGif] = useState(gifFromCache)

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(function(){
        // si no tenemos gif llamara al servicio
        if(!gif){
            setIsLoading(true)
            getSingleGif({ id })
                //.then(setGif) es lo mismo
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                    setIsError(false)
                }).catch(err => {
                    setIsLoading(false)
                    setIsError(true)
                })
        }
    },[gif, id])

    return {gif, isLoading, isError}
}