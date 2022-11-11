import React from 'react';
import {Link} from 'wouter'
import './Gif.css'

function Gif({title,id,url}) {
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img loading='lazy' src={url} alt={title}/>
            </Link>
        </div>
    )
}
/* permitira que solo se rendericen los que se agregan */
export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})