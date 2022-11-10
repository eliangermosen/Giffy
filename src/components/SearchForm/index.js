import React, { useState } from 'react';

function SearchForm({onSubmit}){//recibe la prop que en este caso sera un metodo
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        //al metodo que recibe le paso el estado que tenga en ese momento
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return(
        // cuando envie el form llama el motodo handleSubmit
        <form action="" onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input 
                placeholder='Search a Gif here...'
                type="text" value={keyword}
                onChange={handleChange}
            />
        </form>
    )
}
/* le pasamos el componente que queremos memorizar cada vez
que se renderize, evitara que se renderize en base a sus props.
ya que si continuan iguales no se renderizara*/
export default React.memo(SearchForm)