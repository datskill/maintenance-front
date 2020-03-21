import Navbar from "./Navbar";
import * as React from "react";
import * as renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("App renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
