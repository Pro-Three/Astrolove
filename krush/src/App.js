import React from 'react';
import './App.css';
import 'materialize-css';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Components
import Navbar from './components/layout/navbar';
import Footer from './components/layout/Footer';


// NavBar Pages
import Dashboard from './pages/dashboard';
import Chats from './pages/chats';
import Profile from './pages/profile';
import Matches from './pages/matches';

import OnLoad from './pages/onload';
import CreateAccount from './pages/createaccount';
import Login from './pages/login';
import Logout from './pages/logout';
import OnLook from './pages/onlook'

// Footer Pages
import AboutUs from './pages/aboutus';
import Contact from './pages/contactus';

const httpLink = createHttpLink({
  uri: '/graphql',
});

console.log(`httpLink:  `, httpLink)

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
            {/* <Switch> */}
              {/* NAVBAR */}

              {/* LOGIN */}
              <Route path="/aboutus" exact component={AboutUs} />
              <Route path="/onload" exact component={OnLoad} />
              <Route path="/login" exact component={Login} />
              <Route path="/createaccount" exact component={CreateAccount} />


              {/* LOGGED IN */}
              <Route path="/" exact component={Dashboard} />
              <Route path="/chats" exact component={Chats} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/onlook" exact component={OnLook} />
              <Route path="/matches" exact component={Matches} />
              <Route path="/logout" exact component={Logout} />

              {/*  */}
              {/*  */}

              {/* Footer */}
              <Route path="/contact" exact component={Contact} />
      
            { /*</Switch>*/ }
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;