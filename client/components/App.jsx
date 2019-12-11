import React from "react";
import OtherItems from "./OtherItems/index.jsx";
import OverviewContainer from "../containers/Overview";
import QuestionsContainer from "../containers/Questions";
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
        <QuestionsContainer />
        <Reviews />
      </div>
    );
  }
}
