import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navbar.css'
import parisLogo from '../../assets/ville-paris.png'

export default function ButtonAppBar() {
    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <img className="image-gabarit" src={parisLogo} alt=""></img>
                    <Typography variant="h6" className="title-centred">OpenData Paris</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}