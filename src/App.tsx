import { useState } from 'react'
import './App.css'
import Button from './Button/Button'
import Header from './Header/Header'
import JokeDisplay from './JokeDisplay/jokeDisplay'
import { getJoke} from './assets/scripts'
import { Joke } from './types/interfaces'

const inicialJoke: Joke = {
  id: 1,
  punchline: "",
  setup: "",
  type: ""
}

function App() {
  const [actualJoke, setJoke] = useState<Joke | undefined>(inicialJoke);
  const [showJokeDisplay, setShowJokeDisplay] = useState<boolean>(false);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  function getNewJoke() {
    getJoke().then((newJoke) => {
      setJoke(newJoke)
      setShowJokeDisplay(true);
      setShowPunchline(false)
    });
  }

  return (
    <>
      <Header/>
      <Button text={"Get joke"} onClickFunction={getNewJoke}/>
      {showJokeDisplay && <JokeDisplay joke={actualJoke} showPunchline={showPunchline} setShowPunchline={setShowPunchline}/>}
    </>
  )
}

export default App
