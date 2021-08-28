import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
// import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import chats from './pages/chats';
import Profile from './pages/profile';
import Matches from './pages/matches';
// import Design from './pages/Design';
// import Company from './pages/Company';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    {/* <Tracks />   */}
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/chats" exact component={chats} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/matches" exact component={Matches} />
    </Switch>
    </div>
    </Router>
  );
}

export default App