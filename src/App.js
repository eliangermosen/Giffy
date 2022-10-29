import React from 'react';
import './App.css';
import ListOfGif from './components/ListOfGif';
import {Route, Link} from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/formula1">Gifs de Formula1</Link>
        <Link to="/gif/nba">Gifs de NBA</Link>
        <Link to="/gif/mlb">Gifs de MLB</Link>
        <Link to="/gif/ufc">Gifs de UFC</Link>
        <Route 
          component={ListOfGif}
          path='/gif/:keyword'/>
        {/* <button onClick={() => {setGifs(DIFFERENT_GIFS)}}>Cambiar Gifs</button> */}
      </section>
    </div>
  );
}

export default App;
