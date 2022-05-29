import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useFetch from './useFetch-Hook/useFetch';
import './FoodBox.scss'

const FoodBox = ()=>{
    const url = 'https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-79/cooking-ninja/data/db.json'
    const {data ,error} = useFetch(url);
   
    return (
        <div className="wrapper">
            {error && <h1 className='error'> Error : {error.message}</h1>}
            {data && data.map(el=>{
                return(
                    <div className="foodBox" key={el.id}>
                        <h1 className='foodbox__title'>{el.title}</h1>
                        <h1 className='foodbox__cookingTime'>{el.cookingTime}</h1>
                        <p className="foodbox__description">
                            {el.method.slice(0 ,160)+` ...`}
                        </p>
                        <Link to={`/recipe/${el.id}`}>
                            <button className='foodbox__btn'>Cook This</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default FoodBox;