import React from "react";
import renderer from "react-test-renderer";

import Login from "./Login";

describe("<Login />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
