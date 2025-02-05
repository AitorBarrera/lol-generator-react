import { useState } from 'react'
import './App.css'
import Button from './Button/Button'
import Header from './Header/Header'
import JokeDisplay from './JokeDisplay/jokeDisplay'
import { getJoke} from './assets/scripts'
import { Joke } from './types/interfaces'

const inicialJoke: Joke = {
  id: 312312,
  punchline: "Lodsa",
  setup: "czxcxczx",
  type: "va"
}

function App() {
  const [actualJoke, setJoke] = useState<Joke | undefined>(inicialJoke);

  function getNewJoke() {
    getJoke().then((newJoke) => setJoke(newJoke));
  }

  return (
    <>
      <Header/>
      <Button text={"Get joke"} onClickFunction={getNewJoke}/>
      <JokeDisplay joke={actualJoke}/>
    </>
  )
}

export default App
