import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

import Chore from "./Chore";

//Test to check if the app is being rendered
describe("App created", () => {
  it("has 4 children", () => {
    const tree = renderer.create(<Chore />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  //Test to check if what is being rendered in 'app' matches the snapshop in "_snapshot" file
  it("renders correctly", () => {
    const tree = renderer.create(<Chore />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
