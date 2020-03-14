import * as React from "react";
import * as renderer from "react-test-renderer";
import GeneralPage from "./GeneralPage";

it("GeneralPage renders correctly", () => {
  const tree = renderer.create(<GeneralPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
