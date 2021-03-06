import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Text } from "../../Text";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className="empty-div"
      >
        <Grid item md={5} xs={4} className="styled-copyright">
          {Text.footer.copyright}
        </Grid>
        <Grid item md={3} xs={4} className="styled-description">
          {Text.footer.description}
        </Grid>
        <Grid item md={4} xs={4}>
          <Typography className="styled-maddewithlove" align="right">{Text.footer.madewithlove}</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
