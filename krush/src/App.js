import './App.css';
import 'materialize-css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// import Tracks from './components/layout/Tracks';

// NavBar Pages
import Dashboard from './pages/dashboard';
import Chats from './pages/chats';
import Profile from './pages/profile';
import Matches from './pages/matches';
import OnLoad from './pages/onload';
import CreateAccount from './pages/createaccount';
import Login from './pages/login';
import Logout from './pages/logout';

// Footer Pages
import AboutUs from './pages/aboutus';




function App() {
  return (
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
      <Route path="/matches" exact component={Matches} />
      <Route path="/logout" exact component={Logout} />

      {/*  */}
      {/*  */}

      {/* Footer */}
      <Route path="/aboutus" exact component={AboutUs} />
      
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App