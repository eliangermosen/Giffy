import React from 'react';
import {useLocation} from "wouter";
import useForm from './hook';
import css from './SearchForm.module.css'

const RATINGS = ['g','pg','pg-13','r']

function SearchForm({ initialKeyword = '', initialRating = 'g'}){
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    //const [rating, setRating] = useState(initialRating)
    //const [times, setTimes] = useState(0)

    /* este hook devuelve un array de 2 posiciones como el state
    el estado y dispatch. Dispatch: lanza acciones para 
    actualizar el estado.
    el hook necesita un reducer y el estado inicial.

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0
    })
    */

    const { keyword, times, rating, updateKeyword, updateRating } = useForm({ 
        initialKeyword, 
        initialRating 
    })

    const [_, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
        // dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value})
    }
    
    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
        // dispatch({type: ACTIONS.UPDATE_RATING, payload: evt.target.value})
    }

    return(
        // cuando envie el form llama el motodo handleSubmit
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input 
                className={css["c-search-input"]}
                placeholder='Search a Gif here...'
                type="text" value={keyword}
                onChange={handleChange}
            />
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating types</option>
                {RATINGS.map((rating) => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
            <small>{times}</small>
        </form>
    )
}
/* le pasamos el componente que queremos memorizar cada vez
que se renderize, evitara que se renderize en base a sus props.
ya que si continuan iguales no se renderizara*/
export default React.memo(SearchForm)