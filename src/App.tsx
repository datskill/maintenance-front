import React from 'react';
import './App.css';
import ButtonAppBar from './components/Navbar/Navbar';
import InputCsv from './components/input-csv/InputCsv';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
        <InputCsv></InputCsv>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
