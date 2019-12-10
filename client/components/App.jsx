import React from "react";
import OtherItems from "./OtherItems/index.jsx";
import Overview from "./Overview";
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
        <Overview />
        <OtherItems />
        <Questions />
        <Reviews />
      </div>
    );
  }
}
