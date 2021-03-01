import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Unsubscribe from '../Unsubscribe/Unsubscribe';
import About from '../About/About';

function App() {
  document.body.style.overflow = "hidden";
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/unsubscribe' component={Unsubscribe} />
        <Route exact path='/about' component={About} />
      </Router>
    </div>
  );
}

export default App;