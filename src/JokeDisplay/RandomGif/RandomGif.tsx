interface RandomGifProps{
  num: number | undefined;
}

function RandomGif({num}: RandomGifProps) {

  return (
    <img src={`img/lol${num}.gif`} alt="LOL GIF"/>
  )
}

export default RandomGif