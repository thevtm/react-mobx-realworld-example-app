import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";

@inject("commonStore")
@withRouter
@observer
export default class Home extends React.Component<any> {
  componentDidMount() {
    this.props.commonStore.loadTags();
  }

  render() {
    const { token, appName } = this.props.commonStore;
    return (
      <div className="home-page">
        <Banner token={token} appName={appName} />

        <div className="container page">
          <div className="row">
            {/* <MainView /> */}

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
