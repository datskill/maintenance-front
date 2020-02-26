import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { fileListToArray } from '../../core/utils';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import './InputCsv.css'


export interface IState {
    files: File[];
    onMaintenance: boolean;
}

export default class InputCsv extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = { files: [], onMaintenance: false };
        this.sendCSV = this.sendCSV.bind(this);
    }
    getUploadedFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files: FileList = e.target.files ? e.target.files : new FileList();
        const filesArray = fileListToArray(files);
        if (files) this.setState({ files: filesArray });
    }
    maintenanceSite() {
        return (
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                className="maintenance-site">
                <Grid item md={12}><p className="style-text">Le site est actuellement en maintenance</p></Grid>
            </Grid>

        );
    }
    NoMaintenanceSite() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className=""
            >
                <Grid item md={12}>
                    <p className="styled-p">Déposer un fichier CSV</p>
                </Grid>
                <Grid className="" item md={12}>
                    <input
                        accept=".csv"
                        id="contained-button-file"
                        multiple
                        type="file"
                        className="display-nothing"
                        onChange={this.getUploadedFileName}
                        disabled={this.state.onMaintenance}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" startIcon={<SaveIcon />}>
                            Déposer un fichier
                            </Button>
                    </label>
                </Grid>
                <Grid className="" item md={12}>
                    <p> Les fichiers suivants sont importés : </p>
                    <ul>
                        {this.state.files ? this.state.files.map(file => {
                            return <li className="styled-p" key={file.name}>{file.name}</li>
                        }) : "Aucun fichier importé"}
                    </ul>
                </Grid>
                {console.warn(this.state.files)}
                {this.state.files.length === 0 ? this.disabledButton() : this.activatedButton()}
                {console.warn(this.state.files)}
            </Grid>
        );
    }
    disabledButton() {
        return (
            <Grid className="padding-button" item md={12}>
                <Button
                    variant="contained"
                    component="label"
                    disabled
                >
                    Envoyer
                </Button>
            </Grid>
        );
    }
    sendCSV(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        axios.post(`http://localhost:8080/data`, this.state.files).then(res => {
            console.log(res);
        })
    }
    activatedButton() {
        return (
            <Grid className="padding-button" item md={12}>
                <Button
                    variant="contained"
                    component="label"
                    className="custom-button"
                    startIcon={<CloudUploadIcon />}
                    onClick={() => this.sendCSV}
                >
                    Envoyer
                </Button>
            </Grid>
        );
    }

    render() {
        return (
            <div className="root" >
                {!this.state.onMaintenance ? this.NoMaintenanceSite() : this.maintenanceSite()}
            </div>
        );
    }
}
