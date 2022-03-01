import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import AddFamilyMember from './AddFamilyMember';

//Test to check if the app is being rendered
describe("AddFamilyMember component created", () => {
  it('has 3 children', () => {
    const tree = renderer.create(<AddFamilyMember />).toJSON();
    expect(tree.children.length).toBe(3);
  });

//   //Test to check if what is being rendered in 'app' matches the snapshop in "_snapshot" file
//   it('renders correctly', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

  //Test to check whether the text 'Hello World!' is being rendered to the screen
//   let findTextElement = function(tree, element){
//     console.warn(tree)
//     return true;
// }
 
// it('Find text element', ()=>{
//    let tree = renderer.create(<App />).toJSON();
 
//    expect(findTextElement(tree, 'Hello World!')).toBeDefined();
// })
});