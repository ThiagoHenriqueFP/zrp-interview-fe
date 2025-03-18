interface CardimageProps {
  url: string
}

export function CardImage ({url}: CardimageProps) {
  return (<div className='backdrop-blur-md place-self-end mr-10'>
    <img src={url} alt="pokemon frontal image" className='w-70' />
  </div>)
}