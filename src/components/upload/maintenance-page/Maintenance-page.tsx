import React from "react";
import { Grid } from "@material-ui/core";
import { Text } from "../../../Text";
import "./maintenance-page.css";

export default function MaintenancePage() {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className="maintenance-site"
    >
      <Grid item md={12}>
        <p className="style-text">{Text.uploadpage.maintenancepage.title}</p>
      </Grid>
    </Grid>
  );
}
