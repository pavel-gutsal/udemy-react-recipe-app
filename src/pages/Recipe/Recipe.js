import useFetch from '../../Components/useFetch-Hook/useFetch';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.scss'

const Recipe = ()=>{
    

    const {id} = useParams();
    const url = `http://localhost:3000/recipes`;

    const {data ,error} = useFetch(url,id);
   
    console.log(data)
    

    return (
        <div className="recipe">
            {data && 
                <div className="recipe__wrapper">
                    <h1 className="recipe__name">{data.title}</h1>
                    <h1 className="recipe__time">Takes {data.cookingTime} to cook</h1>
                    <div className="recipe__ingr__list">
                        {   data.ingredients.map(el=>{
                                return(
                                    <div key={el.id}>
                                         <h1 className='recipe__ingr' >{el}.</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="recipe__descr">{data.method}</p>

                </div>
            } 
        </div>
    )
}

export default Recipe;