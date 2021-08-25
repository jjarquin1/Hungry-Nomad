import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import SearchBar from "./components/layout/searchBar";
import Search from './pages/search'
import Create from "./pages/create";
import Login from "./pages/login";
import Jumbotron from './components/layout/jumbotron';
import Profile from './pages/profile';


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
            <Jumbotron />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
