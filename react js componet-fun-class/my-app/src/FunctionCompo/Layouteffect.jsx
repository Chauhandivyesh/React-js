import React, { useLayoutEffect, useState } from "react";
const Layouteffect = ()=>{
    const [text, setText] = useState("Code start.....")
    const [ loading, setLoading] = useState(true)


    useLayoutEffect(()=>{
        if (!loading) {
            setText("code welcomee")

        }
        else{
            setText("code start")
        }
    },[])
    return(

        <>
        <h1>Layout effect</h1>
        <h2>{text}</h2>
        </>
    )
}
export default Layouteffect