import React, {useRef, useEffect, useCallback} from 'react';
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
// import useSEO from 'hooks/useTitle';
import { Helmet } from "react-helmet";

export default function SearchResults ({ params }){

    const { keyword } = params
    /*
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    },[keyword])
    */
   const {loading, gifs, setPage} = useGifs({keyword})
   const externalRef = useRef()
   const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef, 
        once: false
    })
    /* const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
    useSEO({title}) */

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

   /* 
   useCallback es una combinacion entre useref y useeffect.
   guarda una funcion entre diferentes renderizados para que siempre sea la misma funcion
   y acepta un array de dependencias para que se actualice cada vez que la dependencia cambie.
   usecallback evita volver a crear la misma funcion entre renderizado asi no se pierde la referencia
   */

   //el paquete debounce hace posible tomar un valor de una funcion que se ejecute varias veces en un tiempo establecido
   const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 1500
    ),[])//solo cuando se renderiza por rpimera vez el componente

   useEffect(function () {
    console.log(isNearScreen)
    if(isNearScreen) debounceHandleNextPage()
   },[isNearScreen, debounceHandleNextPage])

    return(
        <>
            {
                loading
                ? <Spinner/>
                : <>
                    <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={title}/>
                        <meta name="rating" content="General"/>
                    </Helmet>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs}/>
                    <div id='visor' ref={externalRef}></div>
                </>
            }
        </>
        // <h1>Busqueda {params.keyword}</h1>
    )
}