import React from "react";

class LiveClock extends React.Component{

    state={  time: new Date().toLocaleTimeString(),
             visible:true
    }
    componentDidMount(){
        this.time=setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()})
        },1000)
    }
    componentWillUnmount(){
       clearInterval(this.time)
    }
    clickbtn=()=>{ this.setState({visible:!this.state.visible})}
    
    render(){
        return(
           <div>
            {  this.state.visible &&  <h1>{this.state.time}</h1>}
            <button onClick={this.clickbtn}>{this.state.visible?"Hide":"Show"}</button>
           </div>
        )
    }
}
export default LiveClock;