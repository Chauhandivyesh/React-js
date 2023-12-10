import React, { useCallback, useState } from "react";
import Usechild from "./Usechild";

const Usecallback = () =>{
    const[count, setCount] =useState(5)
    const[item, setItem] = useState(10)

    const loadingwithcallback = useCallback(function loading (){
        return count * 2
    },[])
    return(
        <>
        <h1>Use Callback</h1>
        <h2>{count}</h2>
        <h2>{item}</h2>
        <Usechild loading={loadingwithcallback}/>

        <button onClick={()=>setCount(count*5)}>Count</button>
        <button onClick={()=>setItem(count*5)}>Item</button>
        </>
    )
}
export default Usecallback