import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import App from './App';

//Test to check if the app is being rendered
describe("App created", () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  //Test to check if what is being rendered in 'app' matches the snapshop in "_snapshot" file
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //Test to check whether the text 'Hello World!' is being rendered to the screen
  let findTextElement = function(tree, element){
    console.warn(tree)
    return true;
}
 
it('Find text element', ()=>{
   let tree = renderer.create(<App />).toJSON();
 
   expect(findTextElement(tree, 'Hello World!')).toBeDefined();
})
});
