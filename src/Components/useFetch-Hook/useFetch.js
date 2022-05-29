import React,{ useState, useEffect } from "react";

const useFetch = (url , id)=>{
    
    const [data , setDate] = useState(null);
    const [error , setError]=useState(null)

    useEffect(()=>{
        const fetchHandler = async ()=>{
            
            try{
                const data = await fetch(url);
                
                if(!data.ok) throw new Error(data.status)
                
                const res = await data.json();
                if(id){
                    setDate(res.recipes.find(el=>el.id===id))
                }else{
                    setDate(res.recipes);
                }
            }
            catch(err){
                console.log(err)
                setError(err)
            }
        }
        fetchHandler()
    },[])

    return {data ,error};
}

export default useFetch;