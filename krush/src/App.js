import './App.css';
import 'materialize-css';
import Navbar from './components/layout/Navbar';
import Tracks from './components/layout/Tracks';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import Life from './pages/Life';
import Sound from './pages/Sound';
import Design from './pages/Design';
import Company from './pages/Company';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Tracks />  
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Life" component={Life} />
      <Route path="/Sound" component={Sound} />
      <Route path="/Design" component={Design} />
      <Route path="/Company" component={Company} />
    </Switch>
    </div>
    </Router>
  );
}
