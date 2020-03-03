import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import * as T from './config/theme'
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
export {T}
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
      <Route exact path='/'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
