import Button from './components/CustomButton/CustomButton'
import {useState} from "react";
import P1 from './pages/PageOne'
import P2 from './pages/PageTwo'
import P3 from './pages/PageThree'
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function App() {
  const [page, setPage] = useState("one");
  const [count, setCount] = useState(0);

  const renderPage = () => {
    switch(page){
      case "one":
      return <P1/>
      case "two":
      return <P2/>
      case "three":
      return <P3/>
    }
  }

  return (
    <div className="App">
      <Router>

      <div>
        <Navbar>

        </Navbar>
      </div>
      <Button onClick={() => setPage("one")}/>
      <Button onClick={() => setPage("two")}/>
      <Button onClick={() => setPage("three")}/>
      <button onClick={()=> setCount(count+1)}>{count}</button>
      {renderPage()}
      </Router>
    </div>
  );
}

export default App;
