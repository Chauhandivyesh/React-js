import React, { useEffect, useState } from 'react';
// import Usestate from './Usestate';
// import { json } from 'react-router-dom';
const Api=()=>{
    const[apidata,setApidata]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            console.log(result);
            result.json().then((response)=>{
                setApidata(response)
            })
        })
    },[])
    console.log(apidata);

    return(
        <>
            <table border="1" width={"100%"}>
                <tr>
                    <td>User id</td>
                    <td>Id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>  
                {
                    apidata.map((item)=>
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{JSON.stringify(item.completed)}</td>
                    </tr>
                    )
                }  
            </table>        
        </>
    )
}
export default Api

