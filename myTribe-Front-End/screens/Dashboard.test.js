import React from "react";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
