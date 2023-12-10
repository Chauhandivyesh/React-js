import React from 'react';

import { Component } from 'react';
import Uncontrolledcomponents from './Uncontrolledcomponents';
import Listandkeys from './Listandkeys';
// import Classcompoprops from './Classcompoprops'; 


class Classcompositionandinheritance extends Component {

    render() { 
        let data = "sameer"
        return (
            <>
               <h1>Classcompositionandinheritance</h1>
               <Listandkeys name={data}>
                  <h1>hello data</h1>
                 <Uncontrolledcomponents/>
               </Listandkeys>
               
            </>
        );
    }
}

export default Classcompositionandinheritance;