import React, { useState } from 'react'

type Props = {
    setCategories: (categories: React.SetStateAction<string[]>) => void
}

export const AddCategory = ({setCategories}: Props) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categories => [...categories, inputValue])
            setInputValue('')
        }
        console.log('Sumbit hecho')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    )
}
