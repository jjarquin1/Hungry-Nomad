import Button from './components/CustomButton/CustomButton'
import {useState} from "react";
import P1 from './pages/PageOne'
import P2 from './pages/PageTwo'
import P3 from './pages/PageThree'

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
      <Button onClick={() => setPage("one")}/>
      <Button onClick={() => setPage("two")}/>
      <Button onClick={() => setPage("three")}/>
      <button onClick={()=> setCount(count+1)}>{count}</button>
      {renderPage()}
    </div>
  );
}

export default App;
