import React from "react";
import renderer from "react-test-renderer";
import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import SignUp from './SignUp'

describe("<SignUp />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it.only("check if SignUp component contains text input element", async () => {
 const {getByTestId}= render(<SignUp navigation={{  getParam: jest.fn()  }} />);

 expect(getByTestId('textInput')).toBeDefined();

});
});

