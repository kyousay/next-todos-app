import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

it('Should render hello text', () => {
  // TODO リントエラーを解消する
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Home />);
  expect(screen.getByText('Hello Nextjs')).toBeInTheDocument();
});
