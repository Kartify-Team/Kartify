import React from "react";
import { shallow, mount } from "enzyme";
import App from "../client/components/App.jsx";

describe("App Component", () => {
  it("renders", () => {
    shallow(<App />);
  });

  it("renders all child components", () => {
    mount(<App />);
  });
});
