import './App.css';
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart1" to="/jojoPart1">JOJO Part One</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart2" to="/jojoPart2">JOJO Part Two</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart3" to="/jojoPart3">JOJO Part Three</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart4" to="/jojoPart4">JOJO Part Four</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart5" to="/jojoPart5">JOJO Part Five</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart6" to="/jojoPart6">JOJO Part Six</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart7" to="/jojoPart7">JOJO Part Seven</Link></button>
        <button className="button" type="button"><Link style={{color: 'white'}} id="jojoPart8" to="/jojoPart8">JOJO Part Eight</Link></button>
      </header>
    </div>
  );
}

export default App;
