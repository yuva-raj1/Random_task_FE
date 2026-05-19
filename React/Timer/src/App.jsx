import LiveClock from "./Timer/LiveClock";
import StopWatch from "./Timer/StopWatch";

class App extends LiveClock{
  render(){
    return (
      <div>
        {/* <LiveClock/> */}
        <StopWatch/>
      </div>
    )
  }
}
export default App;