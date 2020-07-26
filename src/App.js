import React from 'react';
import { BrowserRouter as Router, Route} from  'react-router-dom';

import Home from './components/Home';
import Chat from './components/Chat';
import Login from './components/Login';

const App = () => (
    <Router>
    <Route path="/" exact component={Login}/>
    <Route path="/home" exact component={Home}/>
    <Route path= "/chat" exact component={Chat} />
     </Router>
);

export default App;