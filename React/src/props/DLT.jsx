import React from "react";
class DLT extends React.Component{
     state = {
        Mode: false
    }
    btn = () => {
        this.setState({
            Mode: !this.state.Mode
        })
    }
    render(){
        return(
            <div style={{backgroundColor:this.state.Mode?"black":"white",
                            color:this.state.Mode?"white":"black",
                            padding:"20px",height:"100vh"}
                            }>
                <h1 style={{ color:this.state.Mode?"white":"black"}}>This is React-js tutorial</h1>
                <button onClick={this.btn}> {this.state.Mode ? "Light Mode" : "Dark Mode"}</button>
            </div>
        )
    }
}
export default DLT;