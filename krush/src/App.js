import './App.css';
import 'materialize-css';
import Navbar from './components/layout/navbar';
// import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import chats from './pages/chats';
import Profile from './pages/profile';
// import Sound from './pages/Sound';
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
    </Switch>
    </div>
    </Router>
  );
}

export default App