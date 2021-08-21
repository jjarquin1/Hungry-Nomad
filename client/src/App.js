import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import SearchBar from "./components/layout/search";
import Create from "./pages/create";
import Login from "./pages/login";
import Jumbotron from './components/layout/jumbotron';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {


  return (
    <ApolloProvider client={client}>
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
        <Jumbotron>
          
        </Jumbotron>
      </Router>
    </ApolloProvider>
  );
}

export default App;
