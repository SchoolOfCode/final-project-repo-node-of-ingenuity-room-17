import React from "react";
import renderer from "react-test-renderer";

import ChoreList from "./SignUp";

describe("<ChoreList />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<ChoreList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<ChoreList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
