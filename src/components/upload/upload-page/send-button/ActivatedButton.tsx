import React from "react";
import { Grid, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { IPropsActivatedButton } from "../../../../core/types/IProps";
import { Text } from "../../../../Text";
import "./activatedButton.css";

export default class ActivatedButton extends React.Component<
  IPropsActivatedButton,
  {}
> {
  render() {
    return (
      <Grid className="padding-button" item md={12}>
        <Button
          variant="contained"
          component="label"
          className="custom-button"
          startIcon={<CloudUploadIcon />}
          onClick={() => this.props.sendCSV()}
        >
          {Text.uploadpage.uploadpage.button.send}
        </Button>
      </Grid>
    );
  }
}
