import { showPunchLine } from "../assets/scripts"
import Button from "../Button/Button"
import { Joke } from "../types/interfaces"
import PuchlineDisplay from "./PuchlineDisplay"

interface jokeDisplayProps {
    joke: Joke | undefined,
} 

function JokeDisplay({joke}:jokeDisplayProps) {
    // const function randomNumberImage() {
    //     const num = Math.round(Math.random() * 6)
    // }

    // const function randomNumberImage() {
    //     const num = Math.round(Math.random() * 6)
    // }
  return (
    <div id="result">
        <p>{joke?.setup}</p>
        <Button 
        text="Reveal punchline"
        onClickFunction={showPunchLine}/>
        
        <PuchlineDisplay mode={"hidden"} joke={joke}/>
    </div>
  )
}

export default JokeDisplay