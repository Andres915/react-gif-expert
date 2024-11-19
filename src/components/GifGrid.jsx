import { useState, useEffect } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // prueba para ver que el useEffect me guarda el efecto de la categoria inicial 
    // y luego no me la vuelve a renderizar
    //const [counter, setCounter] = useState(10);

    const { images, isLoading } = useFetchGifs( category );
    //console.log({isLoading});
    

    // lo siguiente lo vamos a pasar a un customHook que se llama useFetchGirfs
    /* const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        //console.log(newImages);
    }

    useEffect( () => {
        //getGifs(category);
        getImages();
    }, [] ) */
    

  return (
    <>
        <h3>{ category }</h3>
        {
            // if corto con una sola condicion - and logico
            isLoading && ( <h2>Cargando...</h2> )
        }

        <div className='card-grid'>
            
                {/* images.map((img) => {
                    return (
                        <li key={img.id}>{img.title}</li>
                    )
                }) */}
               {/* // destructurar ({ id, title }) = img.id, img.title
                    // diferencias para enviar las props
               */}
               {/*images.map( ({ id, title, urlImg }) => (
                     <GifItem 
                        key={ id }
                        title={ title }
                        urlImg={ urlImg }
                    /> */}
                {
                images.map( ( img ) => (
                    <GifItem 
                        key={ img.id }
                        { ...img }
                    />
               ))
            }
            
        </div>

        {/* <h5>{counter}</h5>
        <button onClick={()=> setCounter( counter + 1 )}>suma</button> */}
    </>
  )
}
