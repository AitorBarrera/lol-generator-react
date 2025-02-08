import Button from "../Button/Button"
import { Joke } from "../types/interfaces"
import PuchlineDisplay from "./PuchlineDisplay"

interface jokeDisplayProps {
    joke: Joke | undefined,
    showPunchline: boolean,
    setShowPunchline: (showPunchline: boolean) => void,
} 

function JokeDisplay({joke, showPunchline, setShowPunchline}:jokeDisplayProps) {

  return (
    <div id="result">
        <p>{joke?.setup}</p>

        <Button 
          text="Reveal punchline"
          onClickFunction={() => setShowPunchline(true)}
        />
        
        {showPunchline && <PuchlineDisplay
          joke={joke}
        />}
    </div>
  )
}

export default JokeDisplay