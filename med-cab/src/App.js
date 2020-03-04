import React, { useState } from 'react';
import { reducer } from "./reducers/reducer"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import './App.css';
import { Route, Switch } from 'react-router-dom';
import * as T from './config/theme'
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Search from './components/Search';
import PrivateRoute from './components/PrivateRoute';
import { Dashboard } from "./components/Dashboard"
// import Mainpage from "./component/Mainpage"
export { T }

const store = createStore(reducer, applyMiddleware(thunk))

function App() {

  const [canRedirect, setCanRedirect] = useState(false);

  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <T.Wrap>
          <Switch>
            <Route exact path='/' >
              <Signin canRedirect={canRedirect} setCanRedirect={setCanRedirect} />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            {/* <PrivateRoute path="Mainpage" component={Mainpage} /> */}


          </Switch>
        </T.Wrap>
        <Search />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
