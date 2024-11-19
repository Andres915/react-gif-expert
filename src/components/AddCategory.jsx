import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        console.log(target.value)
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return

        //setCategories( categories => [ inputValue, ...categories ])
        onNewCategory(newInputValue)
        setInputValue('')
    }

  return (
    <>
        <form
            onSubmit={ (event) => onSubmit(event) } 
            action="">
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}
