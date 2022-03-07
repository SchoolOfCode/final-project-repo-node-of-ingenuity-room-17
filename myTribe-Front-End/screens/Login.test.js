

import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import Login from './Login'


it("check if component comntains button element with Test ID Login", async () => {
 const {getByTestId}= render(<Login/>);

 expect(getByTestId('login')).toBeDefined();


  it("has 2 children", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

