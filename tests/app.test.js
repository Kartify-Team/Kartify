import React from "react";
import { shallow } from "enzyme";
import App from "../client/components/App.jsx";

describe("App Component", () => {
  it("renders", () => {
    shallow(<App />);
  });

  it("renders all child components", () => {
    mount(<App />);
  });

  it("this is destined to fail", () => {
    expect(true).toEqual(false);
  });
});
