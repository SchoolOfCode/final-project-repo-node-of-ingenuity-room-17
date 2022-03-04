// import 'react-native'
// import React from 'react'
// import {fireEvent, render} from '@testing-library/react-native'
// import Login from './Login'
// import {expect, it, jest} from '@jest/globals'
// import { Button } from 'react-native'


// const testProps = {
//     handleSignIn: jest.fn(),
// };

// test.only('Button should call the handleSignIn function.',
// ()=>{
//     const {getByTestId, debug} = render (<Login {...testProps}/>);
//     const button = getByTestId("login");
//     debug()
//     // fireEvent.press(button);
//     // expect(testProps.handleSignIn).toHaveBeenCalled();
// }
// );


import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import Login from './Login'


it("check if component comntains button element with Test ID Login", async () => {
 const {getByTestId}= render(<Login/>);

 expect(getByTestId('login')).toBeDefined();

});
