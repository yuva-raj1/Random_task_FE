import React from "react";
import "../App.css"
class Calculator extends React.Component{
    state={val:""}
    sambtn=(ele)=>{
        if(["+","-","*","/","%"].includes( this.state.val[this.state.val.length - 1])  &&
             ["+", "-", "*", "/","%"].includes(ele.target.textContent) ){
                this.setState({
                    val:this.state.val.slice(0,this.state.val.length-1)+ele.target.textContent
                })
             }
            else{
          this.setState({val:this.state.val+ele.target.textContent})
            }
    }
    delbtn=()=>{
        this.setState({val:this.state.val.slice(0,this.state.val.length-1)})
    }
    evalbtn=()=>{
        this.setState({val:eval(this.state.val).toString()})
    }
  render(){
    return(
        <div className="calci">
            <div className="res">
                {this.state.val}
            </div>
            <div>
                <button onClick={()=>{  this.setState({val:""})}}>AC</button>
                <button onClick={this.delbtn}>DEL</button>
                <button onClick={this.sambtn}>%</button>
                <button onClick={this.sambtn}>/</button>
            </div>
            <div>
                <button onClick={this.sambtn}>9</button>
                <button onClick={this.sambtn}>8</button>
                <button onClick={this.sambtn}>7</button>
                <button onClick={this.sambtn}>*</button>
            </div>
            <div>
                <button onClick={this.sambtn}>6</button>
                <button onClick={this.sambtn}>5</button>
                <button onClick={this.sambtn}>4</button>
                <button onClick={this.sambtn}>-</button>
            </div>
            <div>
                <button onClick={this.sambtn}>3</button>
                <button onClick={this.sambtn}>2</button>
                <button onClick={this.sambtn}>1</button>
                <button onClick={this.sambtn}>+</button>
            </div>
            <div>
                <button onClick={this.sambtn}>0</button>
                <button onClick={this.sambtn}>00</button>
                <button onClick={this.sambtn}>.</button>
                <button onClick={this.evalbtn}>=</button>
            </div>

        </div>
    )
  }
}
export default Calculator;