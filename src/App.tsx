import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppWrapper from "./App-wrapper";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppWrapper />
        </Route>
        <Route path="/api">
          <SwaggerUI url="http://localhost:8080/v2/api-docs" /> />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
