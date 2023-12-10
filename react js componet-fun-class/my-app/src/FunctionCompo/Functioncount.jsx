import React from "react";
import { useState } from "react";

const Functioncount =()=>{
    const Startnumber = 10
    const[count, setCount] = useState(Startnumber)

    return(
        <>
        <button onClick={()=> setCount(count + 1)}>add {count}</button>
        </>
    )
}
export default Functioncount