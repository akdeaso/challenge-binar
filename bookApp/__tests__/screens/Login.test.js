import * as React from 'react';
import {create} from 'react-test-renderer';
import Login from '../../src/screens/Login';

const component = create(<Login />);

describe('should render', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
