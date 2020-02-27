import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Text } from "../../../../Text";
import "./disabledButton.css";

export default function DisabledButton() {
  return (
    <Grid className="padding-button" item md={12}>
      <Button variant="contained" component="label" disabled>
        {Text.uploadpage.uploadpage.button.send}
      </Button>
    </Grid>
  );
}
