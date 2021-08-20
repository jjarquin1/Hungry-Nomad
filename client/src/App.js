import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import SearchBar from "./components/layout/search";
import Create from "./pages/create";
import Login from "./pages/login";


function App() {


  return (
    <Router>
      <div >
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/'>
          <SearchBar />
        </Route>
        <Route exact path='/create'>
          <Create />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
