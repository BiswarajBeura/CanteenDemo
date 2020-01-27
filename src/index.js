import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { Route,Switch, Link, BrowserRouter as Router} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


class App extends Component {
  render(){ return (
    <div className="App">
      
    
      <h1>Let's Get Some Food</h1>
      <Router>
        <div>
          <ul>
            <main>
             <Link to="/SignUpForm">Sign Up</Link>
             <Link to="/LoginForm">Log In</Link>
            </main>
          <Switch>
          <Route exact path="/LoginForm" component={LoginForm} />
            <Route  path="/SignUpForm" component={SignUpForm} />
            </Switch>
          </ul>
        </div>
      </Router>
    </div>
  );
}
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);