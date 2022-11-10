import { useEffect, useState, useRef } from "react";

export default function useTitle({ title }) {

    //se guarda como referencia el document.title
    const prevTitle = useRef(document.title)

    useEffect(() => {
        const previousTitle = prevTitle.current

        document.title = `${title} | Giffy`

        //cuando se desmonte el componente ejecuta la funcion
        //que actualizara el titulu y le pondra el previo
        return () => document.title = previousTitle
    },[title])
}