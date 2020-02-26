import React from 'react';
import './footer.css'
import { Grid } from '@material-ui/core';

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
                <Grid item md={4} xs={6} className="styled-copyright">
                    OpenData Paris Copyright 2021
                </Grid>
                <Grid item md={4} xs={6} className="styled-copyright">
                    EPSI MSPR Maintenance Applicative
                </Grid>
            </Grid>
        </footer >
    );
}