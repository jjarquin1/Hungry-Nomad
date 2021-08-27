import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import SearchBar from "./components/layout/searchBar";
import Search from './pages/search'
import Create from "./pages/create";
import Login from "./pages/login";
import Jumbotron from './components/layout/jumbotron';
import Profile from './pages/profile';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(createHttpLink({ uri: '/graphql' })),
});

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
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
