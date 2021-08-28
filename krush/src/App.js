import './App.css';
// import 'materialize-css';
// import Navbar from './components/layout/Navbar';
// import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainpage';
// import Contact from './pages/Contact';
// import Life from './pages/Life';
// import Sound from './pages/Sound';
// import Design from './pages/Design';
// import Company from './pages/Company';

function App() {
  return (
    <Router>
    <div>
    {/* <Navbar /> */}
    {/* <Tracks />   */}
    <Switch>
      <Route path="/" exact component={MainPage} />
    </Switch>
    </div>
    </Router>
  );
}

export default App