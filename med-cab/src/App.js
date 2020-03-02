import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './components/Signin';


function App() {
  return (
    <div className='App'>
      <Header />
      <Signin />
      <Footer />
    </div>
  );
}

export default App;
