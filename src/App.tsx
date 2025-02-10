import { useState } from 'react'
import './App.css'
import Button from './Button/Button'
import Header from './Header/Header'
import JokeDisplay from './JokeDisplay/jokeDisplay'
import { getJoke} from './assets/scripts'
import { Joke } from './types/interfaces'

function App() {
  const [currentJoke, setCurrentJoke] = useState<Joke | undefined>(undefined);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  function getNewJoke() {
    getJoke().then((newJoke) => {
      setCurrentJoke(newJoke)
      setShowPunchline(false)
    });
  }

  return (
    <>
      <Header/>
      
      <Button text={"Get joke"} onClickFunction={getNewJoke}/>
      
      {currentJoke && 
        <JokeDisplay 
          joke={currentJoke} 
          showPunchline={showPunchline} 
          setShowPunchline={setShowPunchline}
        />
      }
    </>
  )
}

export default App
