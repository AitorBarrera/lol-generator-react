import { getLolImage } from "../assets/scripts"
import { Joke } from "../types/interfaces"

interface PunchlineDisplayProps {
    mode: "show" | "hidden",
    joke: Joke | undefined,
}

function PuchlineDisplay({mode, joke}: PunchlineDisplayProps) {
  return (
    <div className={mode}>
        <p>{joke?.punchline}</p>
        {getLolImage()}
    </div>
  )
}

export default PuchlineDisplay