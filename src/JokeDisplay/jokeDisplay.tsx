import Button from "../Button/Button"
import { Joke } from "../types/interfaces"
import PuchlineDisplay from "./PuchlineDisplay"
import { getLolImage } from "../assets/scripts"
import { useState } from "react";

interface jokeDisplayProps {
    joke: Joke | undefined,
    showPunchline: boolean,
    setShowPunchline: (showPunchline: boolean) => void,
} 

function JokeDisplay({joke, showPunchline, setShowPunchline}:jokeDisplayProps) {
  const [ imgReaction, setImgReaction] = useState<JSX.Element | undefined>();

  return (
    <div id="result">
        <p>{joke?.setup}</p>

        <Button 
          text="Reveal punchline"
          onClickFunction={() => {
            setShowPunchline(true)
            setImgReaction(getLolImage());
          }}
        />
        
        {showPunchline && <PuchlineDisplay
          joke={joke}
          img={imgReaction}
        />}
    </div>
  )
}

export default JokeDisplay