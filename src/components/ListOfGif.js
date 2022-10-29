import React, { useEffect, useState } from "react";
import "./Gif.css"
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGif({params}){

    const {keyword} = params;

    const [gifs, setGifs] = useState({
        loading: false,
        result:[]
    });

    useEffect(function () {
        setGifs(
            actualGifs => ({loading:true, results:actualGifs.results})
        );
        getGifs({keyword}).then(gifs => {
            setGifs({loading:false, results:gifs});
        });
    },[keyword])

    if(gifs.loading) return <i>Cargando...🌀</i>

    return <>
        {
            gifs.result.map(({id,title,url}) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                    /* key={singleGif.id}
                    id={singleGif.id}
                    title={singleGif.title}
                    url={singleGif.url} */
                    /* {...singleGif} spread operator y se le pasan todas las props */
                />
            )
        }
    </>
}