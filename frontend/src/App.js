import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import airport from './images/airport.jpg';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/'>
            <LandingPage/>
          </Route>

          {/* <Route exact path = '/signup'>
            <SignupPage />
          </Route>

          <Route exact path = '/login'>
            <LoginPage />
          </Route>

          <Route exact path = '/search'>
            <SearchPage />
          </Route> */}

        </Switch>
      </Router>
       
        
    </div>
  );
}

export default App;
