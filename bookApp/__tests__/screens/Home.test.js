import * as React from 'react';
import {create} from 'react-test-renderer';
import Home from '../../src/screens/Home';

// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-community/netinfo', () => ({}));

const component = create(<Home />);

describe('should render', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
