import React from "react";
import axios from "axios";
import SaveIcon from "@material-ui/icons/Save";
import Swal from "sweetalert2";
import { Grid, Button } from "@material-ui/core";
import { Text } from "../../../Text";
import { fileListToArray, filesToFormData } from "../../../core/core/utils";
import DisabledButton from "./send-button/DisabledButton";
import { IStateUploadPage } from "../../../core/types/IState";
import { IPropsUploadPage } from "../../../core/types/IProps";
import ActivatedButton from "./send-button/ActivatedButton";
import "./upload-page.css";

export default class UploadPage extends React.PureComponent<
  IPropsUploadPage,
  IStateUploadPage
> {
  constructor(props: IPropsUploadPage) {
    super(props);
    this.state = { files: [] };
    this.sendCSV = this.sendCSV.bind(this);
  }
  getUploadedFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: FileList = e.target.files ? e.target.files : new FileList();
    const filesArray = fileListToArray(files);
    if (files) this.setState({ files: filesArray });
  };
  sendCSV() {
    const formData = new FormData();
    formData.append("files", this.state.files[0]);
    axios
      .post(`http://localhost:8080/data`, filesToFormData(this.state.files), {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        const statusResponse = res.status === 200 ? "success" : "warning";
        Swal.fire({
          title: Text.alert.title,
          text: res.data,
          icon: statusResponse,
          showCancelButton: false,
          confirmButtonText: Text.alert.ok
        }).then(result => {
          this.setState({ files: [] });
        });
      });
  }

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item md={12}>
          <p className="styled-p-margin">{Text.uploadpage.uploadpage.title}</p>
        </Grid>
        <Grid item md={12}>
          <input
            accept=".csv"
            id="contained-button-file"
            multiple
            type="file"
            className="display-nothing"
            onChange={this.getUploadedFileName}
            disabled={this.props.onMaintenance}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<SaveIcon />}
            >
              {Text.uploadpage.uploadpage.depot}
            </Button>
          </label>
        </Grid>
        <Grid item md={12}>
          <p>{Text.uploadpage.uploadpage.listFile}</p>
          <ul>
            {this.state.files
              ? this.state.files.map(file => {
                  return (
                    <li className="styled-p" key={file.name}>
                      {file.name}
                    </li>
                  );
                })
              : Text.uploadpage.uploadpage.emptylistfile}
          </ul>
        </Grid>
        {this.state.files.length === 0 ? (
          <DisabledButton></DisabledButton>
        ) : (
          <ActivatedButton sendCSV={this.sendCSV}></ActivatedButton>
        )}
      </Grid>
    );
  }
}
