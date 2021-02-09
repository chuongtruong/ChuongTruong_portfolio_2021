import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
