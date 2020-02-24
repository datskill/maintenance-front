import React from 'react';
import './App.css';
import ButtonAppBar from './components/Navbar/Navbar';
import InputCsv from './components/input-csv/InputCsv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
        <InputCsv></InputCsv>
      </header>
    </div>
  );
}

export default App;
