import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  // const handleAdd = () => {
  //   setCategories([...categories, 'Hunter X Hunter'])
  // }
    

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        
        {
          categories.map(category => {
            return <GifGrid category={category}/>
          })
        }
      
      </>
  )
}
