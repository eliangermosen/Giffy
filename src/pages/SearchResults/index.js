import React from 'react';
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs';

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
   const {loading, gifs} = useGifs({keyword})

    return(
        <>
            {
                loading
                ? <Spinner/>
                : <ListOfGifs gifs={gifs}/>
            }
        </>
        // <h1>Busqueda {params.keyword}</h1>
    )
}