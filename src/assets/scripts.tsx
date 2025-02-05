import { Joke } from "../types/interfaces"
let joke: Joke

export function showPunchLine(punchLine: string = "") {
  const num = Math.round(Math.random() * 6)

  return (
    <>
        <p>{punchLine}</p>
        <img src={`img/lol${{num}}.gif`} alt="LOL GIF"/>
    </>
  )
}

export function getLolImage() {
  const num = Math.round(Math.random() * 6)

  return (
    <>
      <img src={`img/lol${{num}}.gif`} alt="LOL GIF"/>
    </>
  )
}

export async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    joke = await response.json()
    console.log(joke)
    return joke

  } catch (error) {
    console.log(error);

  }
  
}