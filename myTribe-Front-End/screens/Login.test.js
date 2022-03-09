

import { render } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import Login from './Login'
import renderer from "react-test-renderer";

//Test to check if Login screen contains button element with Test ID 'Login'
it("check if Login screen contains button element with Test ID Login", async () => {
 const {getByTestId}= render(<Login/>);

 expect(getByTestId('login')).toBeDefined();
});

//Test to check if Login screen has 2 children
  it("check if Login screen has 2 children", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  //Test to check if Login screen renders correctly
  it("check if Login screen renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

