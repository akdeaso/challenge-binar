import React from 'react';
import {create} from 'react-test-renderer';
import Loading from '../../src/components/Loading';

const component = create(<Loading />);

describe('should render loading', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
