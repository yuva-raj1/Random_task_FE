import React from "react";
import "../App.css"
class StopWatch extends React.Component{
    state={
      hour:0,minutes:0,seconds:0,proceed:false
    }
    startbtn=()=>{
        if(this.state.proceed){
            return
        }
        this.setState({proceed:true})
        this.show=setInterval(()=>{
           let {hour,minutes,seconds}=this.state;
                seconds++;
        if(seconds==60){
            seconds=0, minutes++;
        }
        if(minutes==60){
            minutes=0,hour++;
        }
        this.setState({hour,minutes,seconds})

        },1000)
    }
    render(){
        return(
            <div className="box">
                <h1>{this.state.hour}:{this.state.minutes}:{this.state.seconds}</h1>
                <div className="btns">
                <button onClick={this.startbtn} id="start">Start</button>
                <button onClick={ ()=>{
                     
                      clearInterval(this.show)
                      this.setState({hour:0,minutes:0,seconds:0,proceed:false})
                }} id="reset">Reset</button>
                <button onClick={
                    ()=>{  
                         clearInterval(this.show)
                         this.setState( {proceed:false} ) } } id="stop" >Stop</button>
                </div>
            </div>
        )
    }
}
export default StopWatch;