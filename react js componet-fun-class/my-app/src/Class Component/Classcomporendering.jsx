import React from 'react';
import { Component } from 'react';

class Classcomporendring  extends Component {

    constructor(){
        super()
        this.state = {
            islogin : true
        }
    }
  
    render() {  
        // return (

        //  return this.state.islogin && <><div><h1>welcome gest</h1></div></>




           return  this.state.islogin ?  <><div><h1>welcome top</h1></div></> :
             <><div><h1>welcome gest</h1></div></>







            //     let  msg 
            // if(this.state.islogin){
            //     msg = <><div><h1>welcome top</h1></div></>
            // }
            // else {
            //    msg = <><div><h1>welcome gest</h1></div></>
            //     }
            // return msg 


            // if (this.state.islogin){
            //     return<><h1>welcome top</h1></>
            // }
            // else {
            //     return<><h1>welcome gest</h1></>
            // }

        //  <>
    }
}
 

export default Classcomporendring;