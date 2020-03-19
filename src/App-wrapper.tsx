import ButtonAppBar from "./components/navbar/Navbar";
import GeneralPage from "./components/upload/GeneralPage";
import Footer from "./components/footer/Footer";
import React from "react";

function AppWrapper() {
    return (
        <div className="App">
            <header className="App-header">
                <ButtonAppBar></ButtonAppBar>
                <GeneralPage></GeneralPage>
                <Footer></Footer>
            </header>
        </div>
    )
}
export default AppWrapper