import React from "react";
import { shallow } from "enzyme";
import App from "../client/components/App.jsx";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("this is destined to fail", () => {
    expect(true).toEqual(false);
  });
});
