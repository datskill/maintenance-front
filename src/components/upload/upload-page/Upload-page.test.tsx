import * as React from "react";
import * as renderer from "react-test-renderer";
import UploadPage from "./Upload-page";

it("UploadPage renders correctly without maintenance", () => {
  const onMaintenance = false;
  const tree = renderer
    .create(<UploadPage onMaintenance={onMaintenance} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("UploadPage renders correctly in maintenance", () => {
    const onMaintenance = true;
    const tree = renderer
      .create(<UploadPage onMaintenance={onMaintenance} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });