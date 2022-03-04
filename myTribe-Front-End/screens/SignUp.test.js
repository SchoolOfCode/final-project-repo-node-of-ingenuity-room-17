import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import SignUp from './SignUp'


it.only("check if SignUp component contains text input element", async () => {
 const {getByTestId}= render(<SignUp navigation={{  getParam: jest.fn()  }} />);

 expect(getByTestId('textInput')).toBeDefined();

});