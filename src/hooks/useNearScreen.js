import{ useState, useEffect, useRef } from 'react'

export default function useNearScreen({ distance = '100px', externalRef, once = true} = {}){
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(function () {
        let observer;

        const element = externalRef ? externalRef.current :  fromRef.current

        const onChange = (entries, observer) => {
            // console.log(entries)
            const el = entries[0]
            // console.log(el)
            if(el.isIntersecting){
                setIsNearScreen(true)
                once && observer.disconnect()
            }else{
                !once && setIsNearScreen(false)
            }
        }

        /* Un polyfill es una pequena biblioteca que da una funcionalidad que le falta a un navegador x 
        en este caso internet explorer 11 no cuenta con IntersectionObserver
        */
        Promise.resolve(
            /* si el IntersectionObserver no es undefined utiliza el que tienes disponible de lo contrario usa el polyfill */
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(()=>{
            observer = new IntersectionObserver(onChange, {
            rootMargin: distance})

            /* nativo
            observer.observe(document.getElementById('LazyTrending')) */
            // virtual dom
            if(element) observer.observe(element)

            return () => observer && observer.disconnect()
            // cuando el componente se deje de utilizar ejecutara este metodo para que pase cuando no este disponible 
        })
    })

    //devolvemos estos dos
    return {isNearScreen, fromRef}
}