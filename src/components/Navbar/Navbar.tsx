import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import parisLogo from "../../assets/ville-paris.png";
import { Text } from "../../Text";
import "./navbar.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <img className="image-gabarit" src={parisLogo} alt=""></img>
          <Typography variant="h6" className="title-centred">
            {Text.navbar.title}
          </Typography>
          <Link className="link-wrapper" to="/api"><Button className="button-api">API</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
