import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('App Renders', () => {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
