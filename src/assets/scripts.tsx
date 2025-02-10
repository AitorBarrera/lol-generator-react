import { Joke } from "../types/interfaces"
let joke: Joke


export function getRandomNumberForImage() {
  const num = Math.round(Math.random() * 6)
  
  return num;
}

export function getLolImage() {
  const num = Math.round(Math.random() * 6)
  
  return (
    <>
      <img src={`img/lol${num}.gif`} alt="LOL GIF"/>
    </>
  )
}

export async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    joke = await response.json()
    return joke

  } catch (error) {
    console.log(error);

  }
}