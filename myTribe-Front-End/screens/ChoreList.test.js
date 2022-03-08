import React from "react";
import renderer from "react-test-renderer";

import ChoreList from "./ChoreList";

describe("<ChoreList />", () => {
  it("make sure ChoreList screen has 1 child", () => {
    const tree = renderer.create(<ChoreList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("make sure ChoreList screen renders correctly", () => {
    const tree = renderer.create(<ChoreList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
