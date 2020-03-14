import DisabledButton from "./DisabledButton";
import * as React from "react";
import * as renderer from "react-test-renderer";

it("DisabledButton renders correctly", () => {
  const tree = renderer.create(<DisabledButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
