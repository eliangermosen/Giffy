import {useContext} from 'react'
import GifsContext from '../context/GifsContext'

// custom hook que solo devolveria los gifs
export default function useGlobalGif() {
    const {gifs} = useContext(GifsContext);
    return gifs
}