import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import logo from './logo.svg';
import './App.css';

import { reducer } from "./reducers/reducer"

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
