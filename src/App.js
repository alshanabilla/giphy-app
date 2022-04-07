
import HomePage from './pages/Home';
import TrendingPage from './pages/Trending';
import PageNotFoundPage from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/trending" component={TrendingPage}/>
        <Route exact path="/" component={HomePage}/>
        <Route component={PageNotFoundPage} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;