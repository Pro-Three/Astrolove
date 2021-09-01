import './App.css';
import 'materialize-css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/client';

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


function App() {
  return (
    // <ApolloProvider>
    <Router>
    <div>
    <Navbar />
    <Switch>
      {/* NAVBAR */}

      {/* LOGIN */}
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
      <Route path="/aboutus" exact component={AboutUs} />
      <Route path="/contact" exact component={Contact} />
      
    </Switch>
    <Footer />
    </div>
    </Router>
    // </ApolloProvider>
  );
}

export default App