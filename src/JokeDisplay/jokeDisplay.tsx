import Button from "../Button/Button"
import { Joke } from "../types/interfaces"
import { getRandomNumberForImage } from "../assets/scripts"
import { useState } from "react";

interface jokeDisplayProps {
    joke: Joke | undefined,
    showPunchline: boolean,
    setShowPunchline: (showPunchline: boolean) => void,
} 

function JokeDisplay({joke, showPunchline, setShowPunchline}:jokeDisplayProps) {
  const [ randomNum, setRandomNum] = useState<number | undefined>();

  function newRandomNum() {
    setRandomNum(getRandomNumberForImage());
  }

  return (
    <div id="result">
        <p>{joke?.setup}</p>

        <Button 
          text="Reveal punchline"
          onClickFunction={() => {
            setShowPunchline(true)
            newRandomNum()
          }}
        />
        
        {showPunchline && (
          <>
                <p>{joke?.punchline}</p>
                <img src={`img/lol${randomNum}.gif`} alt="LOL GIF"/>
          </>)
        }
    </div>
  )
}

export default JokeDisplay