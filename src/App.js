import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/home';
import Contact from './component/contact';
import Education from './component/education';
import Projects from './component/projects';
import About from './component/about';
import Experience from './component/experience';
import Trainings from './component/trainings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/aboutme">
          <About/>
        </Route>
        <Route path="/contactme">
          <Contact/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/education">
          <Education/>
        </Route>
        <Route path="/experience">
          <Experience/>
        </Route>
        <Route path="/trainings-events">
          <Trainings/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
