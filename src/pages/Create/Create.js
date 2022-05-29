import  {useState ,useRef} from 'react';
import './Create.scss'



const Create = ()=>{
    const [title , setTitle] = useState('');
    const [method , setMethod] = useState('');
    const [time , setTime] = useState('');
    const [newIngredient , setNewIngredient] = useState('');
    const [ingridients , setIngridients] = useState([]);

    // resizable text area
    const inputRef = useRef();

    const textareaHandler = (e)=>{
        setMethod(e.target.value); 
        
        // resizable text area
        inputRef.current.style.height= e.target.scrollHeight+ 'px'
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(title);
        console.log(method);
        console.log(time);
        console.log(ingridients)

    }

    const ingridientHandler =(e)=>{
        e.preventDefault();
        const ingr = newIngredient.trim();
        if(ingr && !ingridients.includes(ingr)){
            setIngridients(prev=>[...prev , ingr])
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
                <span>Recipe ingridients :</span>
                <div className="recipe__input__ingr">
                    <input 
                        className='recipe_input'
                        type="text"
                        placeholder='Ingridients'
                        onChange = {(e)=>{setNewIngredient(e.target.value)}}
                        value = {newIngredient}
                        />
                    <button 
                        className='recipe__ingr__btn'
                        onClick={ingridientHandler}
                        >add</button>
                </div>
                
                <p className="recipe__inp__text"><span>Current ingridients :</span>
                {ingridients.map(el=>{return el + ' , '})}
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