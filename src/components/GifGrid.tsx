import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

type Props = {
    category: string
}

export const GifGrid = ({category}: Props) => {
    const {data, loading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                {
                    data.map((img: any) => (
                        <GifGridItem 
                            id={img.id}
                            title={img.title}
                            url={img.url}
                        />
                    ))
                }
            </div>
        </>
        
    )
}



