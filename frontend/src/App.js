import './App.css';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chats" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
