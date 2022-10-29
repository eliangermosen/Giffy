import React from "react";
import "./Gif.css"

export default function Gif({title,id,url}) {
    return (
        <a className="gif" href={`${id}`}>
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </a>
    )
}