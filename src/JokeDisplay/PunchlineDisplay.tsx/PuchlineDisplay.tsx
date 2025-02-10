import { Joke } from "../../types/interfaces"

interface PunchlineDisplayProps {
    joke: Joke | undefined,
}

function PuchlineDisplay({joke}: PunchlineDisplayProps) {
  return (
    <div>
        <p>{joke?.punchline}</p>
    </div>
  )
}

export default PuchlineDisplay