import { render, screen, FireEvent } from '@testing-library/react-native';
import {expect, it, jest} from '@jest/globals'
import Welcome from './Welcome'


it.only("check if family component contains scrollview element", async () => {
 const {getByTestId}= render(<Welcome navigation={{ getParam: jest.fn() }} />);

 expect(getByTestId('scrollViewWelcome')).toBeDefined();

});