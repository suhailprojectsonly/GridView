import './App.css';
import Header from './Components/Header';
import GridList from './Components/GridList';
import Footer from './Components/Footer';
import About from './Components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Router>
     <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </Router>

     <GridList></GridList>
     <Footer></Footer>

    </div>
  );
}

export default App;
