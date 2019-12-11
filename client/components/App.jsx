import React from "react";
import OtherItems from "./OtherItems";
import OverviewContainer from "../containers/Overview";
import Questions from "./Questions";
import Reviews from "./Reviews";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <OverviewContainer />
        <OtherItems />
        <Questions />
        <Reviews />
      </div>
    );
  }
}
