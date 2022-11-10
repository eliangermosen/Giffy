import { useEffect, useRef } from "react";

export default function useSEO({ description, title }) {

    //se guarda como referencia el document.title
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector
        ('meta[name="description"]')
        .getAttribute('content')
    )

    useEffect(() => {

        const previousTitle = prevTitle.current

        if(title){
            document.title = `${title} | Giffy`
        }

        //cuando se desmonte el componente ejecuta la funcion
        //que actualizara el titulu y le pondra el previo
        return () => document.title = previousTitle
    },[title])

    useEffect(() => {
        //almaceno el elemento
        const metaDescription = document.querySelector('meta[name="description"]')
        const previousDescription = prevDescription.current

        if(description){
            //
            metaDescription.setAttribute('content', description)
        }

        //antes de volver a ejecutar el efecto se ejecuta
        return () => metaDescription.setAttribute('content', previousDescription)
    },[description])
}