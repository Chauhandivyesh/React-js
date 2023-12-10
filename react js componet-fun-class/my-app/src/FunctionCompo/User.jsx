import React, { useEffect } from "react";
// import { useState } from "react";

const User =(props)=>{
    useEffect(()=>{
        alert("called useeffect1")
        alert("called useeffect2");
    },[props.count])
    return(
        <>
        <h1>User data</h1>
        <h3>{props.count}</h3>
        <h3>{props.data}</h3>
        </>
    )
}
export default User