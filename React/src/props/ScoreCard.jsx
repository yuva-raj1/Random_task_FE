import React from "react";
class ScoreCard extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div style={{backgroundColor:"blue",width:"500px",height:"250px",color:"black",margin:"10px",padding:"10px"}}>
                <h1>Kabaddi</h1>
                <p>Name : {this.props.name}</p>
                <p>Points:{this.props.points}</p>
                <p>Raids: {this.props.raids}</p>
                <p>Tackles:{this.props.tackles}</p>
            </div>
        )
    }
}
export default ScoreCard