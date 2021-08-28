import './App.css';
import 'materialize-css';
import Navbar from './components/layout/navbar';
// import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainpage';
import chats from './pages/chats';
// import Life from './pages/Life';
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
      <Route path="/" exact component={MainPage} />
      <Route path="/chats" exact component={chats} />
    </Switch>
    </div>
    </Router>
  );
}

export default App