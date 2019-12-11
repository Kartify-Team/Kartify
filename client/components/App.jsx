import React from "react";
import OtherItemsContainer from "../containers/OtherItems";
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
        <OtherItemsContainer />
        <QuestionsContainer />
        <Reviews />
      </div>
    );
  }
}
