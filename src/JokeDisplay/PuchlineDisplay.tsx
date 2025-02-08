import { Joke } from "../types/interfaces"

interface PunchlineDisplayProps {
    joke: Joke | undefined,
    img: JSX.Element | undefined,
}

function PuchlineDisplay({joke, img}: PunchlineDisplayProps) {
  return (
    <div>
        <p>{joke?.punchline}</p>
        {img}
    </div>
  )
}

export default PuchlineDisplay