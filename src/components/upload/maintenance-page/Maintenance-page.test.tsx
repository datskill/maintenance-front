import * as React from "react";
import * as renderer from "react-test-renderer";
import MaintenancePage from "./Maintenance-page";

it("MaintenancePage renders correctly", () => {
  const tree = renderer.create(<MaintenancePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
