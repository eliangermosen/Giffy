import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
// import { css, jsx } from "@emotion/react";
import Button from "components/Button";

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

/* css: tag template. plantilla de etiquetas
se puede utilizar de esta forma css`` 
al final lo que esto hace es ejecutar un metodo
que recibe un template string y todos los argumentos que 
se le pase dentro del template string
*/

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main page-error">
            <span className="code-error">404</span>
            <span className="msg-error">Sometimes gettings lost isn't that bad</span>
            <img className="gif-error" src={randomImage()} alt="alt-page-404"/>
            <Button href='/'>Go to home</Button>
        </div>
      </div>
    </>
  );
}