import React from 'react';
import Gif from 'components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Redirect } from 'wouter';
// import useSEO from 'hooks/useSEO';
import { Helmet } from "react-helmet";

export default function Deatil ({params}){
    // console.log(params.id);

    //quiere utilizar el context pero dependiendo si tiene 
    //el acceso leera el objeto del value de provider
    //si no leera el valor establecido en el context
    /* const staticConfig = useContext(StaticContext);
    console.log(staticConfig); */
    
    // const {gifs} = useContext(GifsContext);
    // console.log({gifs});

    const {gif, isLoading, isError} = useSingleGif({id: params.id})

    /* const gifs = useGlobalGif();

    busca dentro del arreglo el gif especificado por id
    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    ) */

    /* const title = gif ? gif.title : ''
    useSEO({description: `Detail of ${title}`, title})//({title: 'prueba'}) parametro nombrado */

    const title = gif ? gif.title : ''
    
    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner/>
            </>
        )
    }
    if(isError) return <Redirect to='/404'/>
    if(!gif) return null

    /*
    si se refresca el navegador no aparecera debido a que
    esa refrencia que tiene en memoria react desaparece.
    se podria guardar en local storage, volver a llamar para que la busque al api
    */
    return(
        <>
            <Helmet>
                <title>{title} | Giffy</title>
            </Helmet>
            <Gif {...gif}/>
        </>
    )
}