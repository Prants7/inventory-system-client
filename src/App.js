import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginBox from "./login/LoginBox";
import Header from "./header/Header";

/*function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accountToken: "" };
  }

  render() {
    return (
      <div className='app'>
      <h1>Inventory management projects front end</h1>
      <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' ><LoginBox tokenAssigning= {(newValue) =>this.changeAccountToken(newValue)} /></Route>
        </Switch>
    </div>
    )
  }

  changeAccountToken(newValue) {
    console.log(newValue);
    this.setState({accountToken: newValue});
  }


/*const App = () => (
  <div className='app'>
    <h1>Inventory management projects front end</h1>
    <Header />
    <Main />
  </div>
);*/

/*const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
    </ul>
  </nav>
);*/
}

export default App;

const Home = () => (
  <div className='home'>
    <h1>Welcome</h1>
    <p> This is the front page</p>
  </div>
);

/*const Main = () => (
  <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' ><LoginBox tokenAssigning= {this.props.changeAccountToken} /></Route>
  </Switch>
);*/
