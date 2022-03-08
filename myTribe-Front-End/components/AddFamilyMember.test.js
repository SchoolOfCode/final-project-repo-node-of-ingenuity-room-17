import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import AddFamilyMember from './AddFamilyMember';

//Test to check if the 'Add family member component' is being rendered with 3 children
describe("AddFamilyMember component has 3 children", () => {
  it('Add family member component has 3 children', () => {
    const tree = renderer.create(<AddFamilyMember />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});