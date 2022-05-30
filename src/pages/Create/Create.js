import  {useState ,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.scss'



const Create = ()=>{
    const [title , setTitle] = useState('');
    const [method , setMethod] = useState('');
    const [time , setTime] = useState('');
    const [newIngredient , setNewIngredient] = useState('');
    const [ingredients , setIngredients] = useState([]);

    //Navigate Hook;
    const navigate = useNavigate();

    // resizable text area
    const inputRef = useRef();

    const textareaHandler = (e)=>{
        setMethod(e.target.value); 
        
        // resizable text area
        inputRef.current.style.height= e.target.scrollHeight+ 'px'
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const send = {title , method ,cookingTime:time+' minutes', ingredients}
        const url = 'http://localhost:3000/recipes'

        //fetch post
        fetch(url , {
            method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(send)
        })
        .then(
            setTitle('') , setMethod(''),setTime(''),setIngredients([])
        ).then(navigate('/'));
        
        

    }

    const ingridientHandler =(e)=>{
        e.preventDefault();
        const ingr = newIngredient.trim();
        if(ingr && !ingredients.includes(ingr)){
            setIngredients(prev=>[...prev , ingr])
        }

        setNewIngredient('')
    }


    return (
        <form 
            className="create"
            onSubmit={submitHandler}
        >
            <h1>Add a New Recipe</h1>
            <label >
                <span>Recipe title :</span>
                <input 
                    className='recipe_input'
                    type="text"
                    onChange={(e)=>{setTitle(e.target.value) }}
                    value = {title}
                    placeholder='Name your creation'
                    required
                     />
            </label>
            <label >
                <span>Recipe ingredients :</span>
                <div className="recipe__input__ingr">
                    <input 
                        className='recipe_input'
                        type="text"
                        placeholder='ingredients'
                        onChange = {(e)=>{setNewIngredient(e.target.value)}}
                        value = {newIngredient}
                        />
                    <button 
                        className='recipe__ingr__btn'
                        onClick={ingridientHandler}
                        >add</button>
                </div>
                
                <p className="recipe__inp__text"><span>Current ingredients :</span>
                {ingredients.map(el=>{return el + ' , '})}
                </p>
                
            </label>
            <label >
                <span>Recipe method :</span>
                <textarea 
                    // resizable text area
                    ref = {inputRef}
                    className='recipe_input'
                    type="text"
                    onChange={textareaHandler}
                    value = {method}
                    placeholder='Discribe process of cooking'
                    required
                     />
            </label>
            <label >
                <span>Cooking time (minutes):</span>
                <input 
                    className='recipe_input'
                    type="number"
                    onChange={(e)=>{setTime(e.target.value)}}
                    value = {time}
                    placeholder='How long?'
                    required
                     />
            </label>
            <button className='recipe__btn' type='submit'> Submit</button>
        </form>
    )
}

export default Create;