import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import Signup from './components/Signup'
import Signin from './components/Signin'

import './App.css';

function App() {
  return (
    <div className="App">
      <Signin/>
      <Signup/>
    </div>
  );
}

export default App;
