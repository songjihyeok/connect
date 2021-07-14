import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './container/main/main'

function App() {
  return (
    <div className="App">
        <Route path="/" component={Main} />
    </div>
  );
}

export default App;
