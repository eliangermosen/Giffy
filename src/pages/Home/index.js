import React, { useState } from 'react';
import {useLocation} from "wouter";
import ListOfGif from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';

// const POPULAR_GIFS = ["Matrix", "Boxeo", "NBA", "MLB"]

export default function Home (){

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading,gifs}  = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }
    
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    placeholder='Search a Gif here...'
                    type="text" value={keyword}
                    onChange={handleChange}
                />
            </form>
            {/* <h3 className='app-title'>Los Gifs mas populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) =>
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    )
                }
            </ul> */}
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='app-title'>Ultima Busqueda</h3>
                    <ListOfGif gifs={gifs}/>
                </div>
                <div className='App-category'>
                    <TrendingSearches/>
                </div>
            </div>
        </>
    )
}