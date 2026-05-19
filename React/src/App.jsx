import React from "react";
import ScoreCard from "./props/ScoreCard"
import LoginLogout from "./props/LoginLogout";
import Counter from "./props/Counter";
import DLT from "./props/DLT"
class App extends React.Component{
  render(){
    return (
      // <div>
      //   <ScoreCard name="Ram" points={8} raids={10} tackles={5} />
      //   <ScoreCard name="Raheem" points={3} raids={10} tackles={8} />
      //   <ScoreCard name="Rathod" points={4} raids={10} tackles={6} />
      // </div>
      // <div>
      //   <LoginLogout/>
      // </div>
      // <div>
      //   <Counter/>
      // </div>
      <div>
        <DLT/>
      </div>
    )
  }
}
export default App;