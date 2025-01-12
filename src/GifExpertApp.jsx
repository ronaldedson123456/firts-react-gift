import { useState } from "react";
import { AddCategory , GifGrid } from "./components";

const apiKey = 'JshU7Ovgcofl4pz0G2S20O5ORVOHhgPX';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
   
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
       setCategories( [ newCategory,...categories] );
       // setCategories( cat => [ ...cat, 'Naruto' ] );

    }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            
            {/* Input */}
            <AddCategory 
             // setCategories={ setCategories }
             onNewCategory = {( event ) => onAddCategory( event )}
            />
            
            {/* Listado de Gif */}
            
            { 
            categories.map( category => (
                <GifGrid 
                        key={ category } 
                        category={ category }/>
                )
                ) 
            }
            
                {/* Gif Item */}
        </>
    )
}