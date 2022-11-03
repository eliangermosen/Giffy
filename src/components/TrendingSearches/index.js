import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'//el import aqui no es asincrono por lo que se descarga/utiliza de inmediato
import Spinner from 'components/Spinner'

// a lazy le debemos pasar una funcion que devuelva el import dinamico del componente que queremos usar
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')//cuando es como una funcion es asincrono y devuelve una  promesa. solo se descargara cuando recat diga utilizalo
)//esta funcion solo se descargara cuando la vayamos a utilizar

export default function LazyTrending(){
    /* NOTA: SE LE DEBE AGREGAR AL COMPONENTE SUPERIOR UN 100VH PARA QUE CUANDO SE INICIE Y 
    VENGA VACIO NO CARGUE ANTES DE TIEMPO NUESTRO COMPONENTE CON LAZY LOAD */

    // USE REF: ES UN BAUL QUE NOS PERMITE GUARDAR VALORES QUE ENTRE RENDERIZADOS SE MANTENDRA EL MISMO VALOR
    // INALTERADO 
    //STATE RENDERIZA EL COMPONENTE CUANDO CAMBIA EL VALOR REF NO
    //const elementRef = useRef()

    //hacemos que devuelva un objeto para mover la ref al customhook
    const {isNearScreen, fromRef} = useNearScreen({ distance: '0px' })

    /* nativo
    return <div id='LazyTrending'>
        {show ? <TrendingSearches/> : null}
    </div> */

    // virtual dom
    return <div ref={fromRef}>
        {/* suspense debe envolver el componente con lazy */}
        <Suspense fallback={<Spinner/>}>
            {isNearScreen ? <TrendingSearches/> : null}
        </Suspense>
    </div> 
}