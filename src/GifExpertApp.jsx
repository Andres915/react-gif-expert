import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
/* import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid' */

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return

        //categories.push(newCategory)
        setCategories([ newCategory, ...categories ])
        //setCategories([ 'Valorant', ...categories ])
        //setCategories( cat => [ ...categories, 'Valorant' ])
        console.log(newCategory);
        
    }

  return (
    <>
        {/* titulo */}
        <h1>GitExpertApp</h1>

        {/* input */}
        <AddCategory
            /* setCategories={ setCategories } */
            onNewCategory = { event  => onAddCategory(event)}
         />

        {/* listado gif */}
        {
            /* categories.map( (category) => {
                return (
                    <div key={ category }>
                        <h3>{category}</h3>
                        <li>{ category }</li>
                    </div>
                )
            }) */
            categories.map( (category) => (
            <GifGrid 
                key={ category }
                category={ category } 
            />
            ))
        }

        {/* gif item */}
    </>
  )
}
