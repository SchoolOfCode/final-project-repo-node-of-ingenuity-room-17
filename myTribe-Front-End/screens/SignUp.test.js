import React from "react";
import renderer from "react-test-renderer";
import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import SignUp from './SignUp'


it("check if SignUp screen contains a Sign Up button with Test ID signUpButton", async () => {
  const {getByTestId}= render(<SignUp navigation={{  getParam: jest.fn()  }} />);
  expect(getByTestId('signUpButton')).toBeDefined();
});

  it("check signup screen renders correctly", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("check if SignUp screen contains text input element with test ID 'textInput", async () => {
 const {getByTestId}= render(<SignUp navigation={{  getParam: jest.fn()  }} />);

 expect(getByTestId('textInput')).toBeDefined();

});


