import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/NavBar";
import SearchBar from "./components/layout/search";


function App() {
  const [page, setPage] = useState("one");
  const [count, setCount] = useState(0);


  return (
    <Router>
      <div >
        <Navbar />
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
