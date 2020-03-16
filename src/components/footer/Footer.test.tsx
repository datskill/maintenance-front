import Footer from "./Footer";
import * as React from "react";
import * as renderer from "react-test-renderer";

it("Footer renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
