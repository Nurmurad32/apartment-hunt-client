import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import HouseRentDetails from './Component/Home/HouseRentDetails/HouseRentDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/houseRent/:houseRentId">
          <HouseRentDetails></HouseRentDetails>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
