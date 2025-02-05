interface ButtonProps {
    text: string,
    onClickFunction: () => void
}

function Button({text , onClickFunction}: ButtonProps) {
  return (
    <button
    className='button'
    onClick={onClickFunction}
    >
    {text}
    </button>
  )
}

export default Button