import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fibonacci from './Fibonacci'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
        </header>

        <div>
          <Route exact path='/' component={ Fibonacci } />
          <Route exact path='/otherpage' component={ OtherPage } />
        </div>
      </div>
    </Router>
  );
}

export default App;
