import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

import Chore from "./Chore";

//Test to check if the chore component is being rendered
describe("Check if chore component has 4 children ", () => {
  it("has 4 children", () => {
    const tree = renderer.create(<Chore />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  //Test to check if what is being rendered in chore component matches the snapshop in "_snapshot" file
  it("Check if chore component renders correctly", () => {
    const tree = renderer.create(<Chore />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
