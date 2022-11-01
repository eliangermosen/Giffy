import React from 'react';
import Gif from '../../components/Gif';
import useGlobalGif from '../../hooks/useGlobalGifs';

export default function Deatil ({params}){
    // console.log(params.id);

    //quiere utilizar el context pero dependiendo si tiene 
    //el acceso leera el objeto del value de provider
    //si no leera el valor establecido en el context
    /* const staticConfig = useContext(StaticContext);
    console.log(staticConfig); */
    
    // const {gifs} = useContext(GifsContext);
    // console.log({gifs});

    const gifs = useGlobalGif();

    // busca dentro del arreglo el gif especificado por id
    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    )

    console.log(gif)

    /*
    si se refresca el navegador no aparecera debido a que
    esa refrencia que tiene en memoria react desaparece.
    se podria guardar en local storage, volver a llamar para que la busque al api
    */
    return(
        <Gif {...gif}/>
    )
}