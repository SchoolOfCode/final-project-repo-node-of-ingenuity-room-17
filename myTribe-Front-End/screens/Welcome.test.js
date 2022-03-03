import React from "react";
import renderer from "react-test-renderer";

import Welcome from "./Dashboard";

describe("<Welcome />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
