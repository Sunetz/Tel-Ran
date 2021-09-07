import { useState } from "react";
import '../css/Counter.css'

const Counter = ()=>{
    const[count, setCount] = useState(0)
    const inc=()=>{
            setCount(Math.min(count +1, 20))
    }
    const dec=()=>{
        setCount(Math.max(count-1, 0))
    }
    return(
        <div className = 'counter'>
            
            <button onClick={inc} className='inc'> + </button>
            <h4>{count}</h4>
            <button onClick={dec} className='dec'> - </button>
        </div>
    )
}

export default Counter