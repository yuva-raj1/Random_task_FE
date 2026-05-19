import React from "react";
class LoginLogout extends React.Component{
    state={status:true}
    btn=()=>{
        this.setState({status:!this.state.status})
    }
    render(){
        return (
            <div>
                <h1>{this.state.status?"This is Login page":"This is Logout page"}</h1>
                <button onClick={this.btn}>{this.state.status?"Logout":"Login"}</button>
            </div>
        )
    }
}
export default LoginLogout