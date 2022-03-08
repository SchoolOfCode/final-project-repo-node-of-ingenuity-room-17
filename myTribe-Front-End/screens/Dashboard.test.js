import { render } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import Dashboard from './Dashboard'
import renderer from "react-test-renderer";

describe("<Dashboard />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
