import ActivatedButton from "./ActivatedButton";
import * as React from "react";
import * as renderer from "react-test-renderer";

it("ActivatedButton renders correctly", () => {
  const sendCsv = () => {};
  const tree = renderer.create(<ActivatedButton sendCSV={sendCsv} />).toJSON();
  expect(tree).toMatchSnapshot();
});