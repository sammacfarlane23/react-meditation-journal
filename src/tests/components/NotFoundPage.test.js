import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

test('should render NotFoundPage correctly', () => {
  const component = render(
    <Router>
      <NotFoundPage />
    </Router>
  );
  expect(component).toMatchSnapshot();
});
