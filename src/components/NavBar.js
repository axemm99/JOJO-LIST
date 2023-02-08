import "./NavBar.css";
import { Navigate, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png?20141130224707"
              width="50"
              height="50"
            ></img>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item"><Link style={{color: 'black'}} id="homeBtn" to="/">Home</Link></a>

            <a className="navbar-item"><Link style={{color: 'black'}} id="addPokemonBtn" to="/addJojoCharacter">Add a JOJO</Link> </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart1" to="/jojoPart1">Jojo Part 1</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart2" to="/jojoPart2">Jojo Part 2</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart3" to="/jojoPart3">Jojo Part 3</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart4" to="/jojoPart4">Jojo Part 4</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart5" to="/jojoPart5">Jojo Part 5</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart6" to="/jojoPart6">Jojo Part 6</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart7" to="/jojoPart7">Jojo Part 7</Link></a>
                <a className="navbar-item"><Link style={{color: 'black'}} id="jojoPart8" to="/jojoPart8">Jojo Part 8</Link></a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
