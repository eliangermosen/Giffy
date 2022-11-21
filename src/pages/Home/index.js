import React from 'react';
import ListOfGif from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import { Helmet } from "react-helmet";

// const POPULAR_GIFS = ["Matrix", "Boxeo", "NBA", "MLB"]

export default function Home (){

    // const [_, pushLocation] = useLocation()

    const {gifs}  = useGifs()

    /* 
    para evitar que cada vez que se renderiza home
    cambie el valor de handleSubmit se utiliza useCallback.
    cada vez que cambie el pushlocation ejecuta la funcion
    */
    /* const handleSubmit = useCallback(({keyword}) => {
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        //console.log(keyword)
    },[pushLocation]) */

    /* useMemo: memoriza una variable. no es recomendado utilizarlo
    se parece al useCallback pero guarda un valor.

    const element = useMemo(() => <SearchForm onSubmit={handleSubmit}></SearchForm>, [handleSubmit])
    */


    return(
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            {/* el componente recibe una prop y mediante 
                ella le paso el metodo handleSubmit
            */}
            {/* <SearchForm onSubmit={handleSubmit}></SearchForm> */}
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
            <header className="o-header">
                <SearchForm/>
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGif gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
                </div>
            </div>
        </>
    )
}