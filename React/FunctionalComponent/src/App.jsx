import Counter from "./Component/Counter"
import LoginLogout from "./Component/LoginLogout";
import ScoreCard from "./Component/ScoreCard";
import DLT from "./Component/DLT"
import Calculator from "./Component/Calculator";
import HideandShow from "./Component/HideandShow";
function App(){
  return (
    // <div>
    //   <Counter/>
    // </div>
    // < div className="container">
    //   <ScoreCard name="Ram" points={8} raids={10} tackles={5} />
    //   <ScoreCard name="Raheem" points={3} raids={10} tackles={8} />
    //   <ScoreCard name="Rathod" points={4} raids={10} tackles={6} />
    // </div>
    // <div>
    //   <LoginLogout/>
    // </div>
    // <div>
    //   <DLT/>
    // </div>
    // <div>
    //   <Calculator/>
    // </div>
    <div>
      <HideandShow/>
    </div>
  )
}
export default App;