import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../compnents/Home';

it('renders correctly', () => {
  const tree = render(<Router><Home /></Router>);
  expect(tree).toMatchSnapshot();
});
