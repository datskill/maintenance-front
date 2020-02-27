import React from "react";
import MaintenancePage from "./maintenance-page/Maintenance-page";
import UploadPage from "./upload-page/Upload-page";
import { IStateInputCsv } from "../../core/types/IState";
import "./generalPage.css";

export default class GeneralPage extends React.Component<{}, IStateInputCsv> {
  constructor(props: any) {
    super(props);
    this.state = { files: [], onMaintenance: false };
  }
  render() {
    return (
      <div className="root">
        {!this.state.onMaintenance ? (
          <UploadPage onMaintenance={this.state.onMaintenance}></UploadPage>
        ) : (
          <MaintenancePage></MaintenancePage>
        )}
      </div>
    );
  }
}
