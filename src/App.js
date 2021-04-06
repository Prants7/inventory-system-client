import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import LoginBox from "./login/LoginBox"

/*function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}*/

const App = () => (
  <div className='app'>
    <h1>Inventory management projects front end</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome</h1>
    <p> This is the front page</p>
  </div>
);

const Main = () => (
  <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' ><LoginBox /></Route>
  </Switch>
);


export default App;
