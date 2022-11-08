import React, { Suspense } from 'react';
import './App.css';

import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import SearchResult from './pages/SearchResults/index';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import {Route, Link} from "wouter";

const HomePage = React.lazy(()=> import('./pages/Home'))

function App() {

  return (
    // TODOS LOS ELEMENTOS QUE ESTAN DENTRO DEL PROVIDER
    // TENDRAN ACCESO AL OBJETO MAGICO
    <StaticContext.Provider  value={
      {
        name: 'elianmtg', 
        suscribeToChannel: true
      }
    }>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">

          <Link to="/">
            <img className="App-logo" src="/logo.png" alt="Giffy Logo"/>
          </Link>

    {/* 
    TODO LO QUE ESTA DENTRO DE NUESTRAS RUTAS TENDRA ACCESO
     EN EL PROVIDER
    */}
          <GifsContextProvider>

            <Route 
              component={HomePage}
              path="/"
            />
            
            <Route 
              component={SearchResult}
              path='/search/:keyword'
            />
            <Route 
              component={Detail}
              path='/gif/:id'
            />

          </GifsContextProvider>

        </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
