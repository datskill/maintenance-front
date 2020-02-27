import React from "react";
import ButtonAppBar from "./components/navbar/Navbar";
import GeneralPage from "./components/upload/GeneralPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
        <GeneralPage></GeneralPage>
        <Footer></Footer>
      </header>
    </div>
  );
}
//test jenkins

export default App;
