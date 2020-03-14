import Navbar from "./Navbar";
import * as React from "react";
import * as renderer from "react-test-renderer";

it("App renders correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
