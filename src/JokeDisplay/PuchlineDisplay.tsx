import { getLolImage } from "../assets/scripts"
import { Joke } from "../types/interfaces"

interface PunchlineDisplayProps {
    joke: Joke | undefined,
}

function PuchlineDisplay({joke}: PunchlineDisplayProps) {
  return (
    <div>
        <p>{joke?.punchline}</p>
        {getLolImage()}
    </div>
  )
}

export default PuchlineDisplay