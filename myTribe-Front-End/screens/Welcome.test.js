import React from "react";
import renderer from "react-test-renderer";
import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import Welcome from './Welcome'


describe("<Welcome />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it.only("check if family component contains scrollview element", async () => {
 const {getByTestId}= render(<Welcome navigation={{ getParam: jest.fn() }} />);

 expect(getByTestId('scrollViewWelcome')).toBeDefined()
});
});

