import './App.css';
import About from './Portfolio/About';
import WorkSamples from './Portfolio/WorkSamples';
import Navigation from './Portfolio/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />'Rubik'
          <Route path="/WorkSamples" component={WorkSamples} />
        </Switch>
      </div>
    </Router>
  );

}

const Home = () => (
  <div className="main_page">
    <br />
    <br />
    <br />
    <br />
    <h1 style={{ fontFamily: 'Rubik' }}>Welcome To My Page</h1>
    <h2 style={{ fontFamily: 'Rubik' }}>Click the <span style={{ color: "black" }}> Links </span> on the <span style={{ color: "black" }}> Navigation Bar</span> to know more about me</h2>
  </div>
)

export default App;
