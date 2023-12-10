import React from 'react';
import { Component } from 'react';


class Classcompostate extends Component {
    constructor () {
        super()
        this.state = {
            count : 10,
            name : "divu",
        } 
    }

    increament=()=>{
        console.log("increament");
        this.setState({count:this.state.count +1});
        this.setState({name:this.state.name="divyesh"})

    }
    decreament=()=>{
        console.log("decreament");
        this.setState({count:this.state.count -1})
        this.setState({name:this.state.name -1})

    }

    render() { 
        return (
            <>
                <h1>Classcompostate </h1>
                <h2>{this.state.count}</h2>
                <h3>{this.state.name}</h3>
                <button onClick={this.increament}>+</button>
                <button onClick={this.decreament}>-</button>
            </>
        );
    }
}
 
export default Classcompostate;