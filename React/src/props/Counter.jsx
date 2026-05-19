import React from "react";
import "./Counter.css"
class Counter extends React.Component{
    state={count:0}
    incbtn=()=>{ this.setState({count:this.state.count+1}) }
    decbtn=()=>{this.setState({count:this.state.count-1})}
    rstbtn=()=>{this.setState({count:0})}
    render(){
        return(
          
            <div className="box">
                
                <h1>Counter Application</h1>
                <p>{this.state.count}</p>
                <div className="box2">
                <button onClick={this.incbtn}>Increment</button>
                <button onClick={this.rstbtn}>Reset</button>
                <button onClick={this.decbtn}>Decrement</button>
                </div>
            </div>
        )
    }
}
export default Counter;