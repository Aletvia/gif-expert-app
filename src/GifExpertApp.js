import React, { useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Samurai X']);
/*
    const handleAdd = () => {
        //setCategories( [ ...categories, 'Inu Yasha' ] );
        setCategories( categories_new => [ ...categories, 'Inu Yasha' ] );
    }
*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key= { category }
                            category= { category }
                        /> 
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
