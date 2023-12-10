import React from 'react';
import {Component} from "react";
import Classcompointro from "./Classcompointro";

class Classcompoprops extends Component {
    render() { 
        let user = {
            name : "Divyesh",
            age : 22,
            location : "surat"
        }

        return (
            <>
                 <h1>my props</h1>
                {/* <Classcompointro name="chauhan"/>  */}
                <Classcompointro user={user}/> 

            </>  
        );
    }
}  
 
export default Classcompoprops;