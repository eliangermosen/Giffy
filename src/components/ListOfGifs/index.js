import React from "react";
// import "../Gif"
import Gif from '../Gif';
import './styles.css'

export default function ListOfGif({gifs}){

    return (
        <div className="ListOfGifs">
            {
                gifs.map(({id,title,url, ...restOfGif}) =>
                    <Gif
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                        extraInfo={restOfGif}
                        /* key={singleGif.id}
                        id={singleGif.id}
                        title={singleGif.title}
                        url={singleGif.url} */
                        /* {...singleGif} spread operator y se le pasan todas las props */
                    />
                )
            }
        </div>
    )
}