import React from 'react';
import './App.css';
import Header from './components/Header/index';
import CalorieTracker from './components/CalorieTracker'

function App() {
  return (
    <div className="App">
      <Header />
      <CalorieTracker />
    </div>
  );
}

export default App;
