import React from 'react';
import { Typography, Grid, GridSpacing, Button } from '@material-ui/core';
import { fileListToArray } from '../../core/utils';
import './InputCsv.css'

export interface IState {
    files: File[];
    onMaintenance: boolean;
}

export default class InputCsv extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = { files: [], onMaintenance: false };
    }
    getUploadedFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files: FileList = e.target.files ? e.target.files : new FileList();
        const filesArray = fileListToArray(files);
        if (files) this.setState({ files: filesArray });
    }
    render() {
        return (
            <div className="root" >
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                    className="awesome-padding"
                >
                    <Grid item md={12}>
                        <p>Déposer un fichier CSV</p>
                    </Grid>
                    <Grid className="awesome-padding" item md={12}>
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
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                    </Grid>
                    <Grid className="awesome-padding" item md={12}>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Envoyer
                    </Button>
                    </Grid>
                    <Grid className="awesome-padding" item md={12}>
                        <p> Les fichiers suivants sont importés : </p>
                        <ul>
                            {this.state.files ? this.state.files.map(file => {
                                return <li key={file.name}>{file.name}</li>
                            }) : "Aucun fichier importé"}
                        </ul>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
