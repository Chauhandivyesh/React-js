// import React from "react";
import { memo } from "react";
 function Usechild(){
    return(
        console.log("called usechild")
    )
 }
 export default memo(Usechild)