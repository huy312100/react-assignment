import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home bootcamp= {'Rookies'}/>
    </div>
  );
}

export default App;
