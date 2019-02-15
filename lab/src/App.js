import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Memo } from "./routes";
import Hooks from "./components/hooks/Hooks";

class App extends Component {
  render() {
    return (
      <Router basename="https://qvil.github.io/react-playgound">
        <div>
          <h1>Labotory</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/memo">Memo</Link>
              </li>
              <li>
                <Link to="/hooks">Hooks</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/memo" component={Memo} />
          <Route path="/hooks" component={Hooks} />
        </div>
      </Router>
    );
  }
}

export default App;
