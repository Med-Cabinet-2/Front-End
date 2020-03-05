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
import Preferences from "./components/Preferences"
import Dashboard from "./components/Dashboard"
import MainPage from "./components/Mainpage"
import SearchByPref from './components/SearchByPref';
import SearchPage from './components/SearchPage';
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
              <Signup canRedirect={canRedirect} setCanRedirect={setCanRedirect} />
            </Route>

            <Route path='/Search'>
              <SearchPage />
            </Route>
            <PrivateRoute path="/preferences" component={Preferences} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/mainpage" component={MainPage} />

            {/* <PrivateRoute path="Mainpage" component={Mainpage} /> */}
            <Route path='/Recommender'>
              <SearchByPref />
            </Route>

          </Switch>
        </T.Wrap>
<<<<<<< HEAD

=======
        {/* <Search /> */}
>>>>>>> 0b8c19f2ce004f829fa22dde5a6347df3a957817
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
