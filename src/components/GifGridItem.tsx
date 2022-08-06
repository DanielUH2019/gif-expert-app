import React from 'react'

type Props = {
  title: string
  url: string
  id: string
}

export const GifGridItem = ({id, title, url}: Props) => {
  console.log(id, title, url)

  return ( 
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
