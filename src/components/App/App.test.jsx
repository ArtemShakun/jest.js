import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App component', () => {
  test('App Renders', () => {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });

  test('typing in Searchbox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();
  });

  test('search filter is working', () => {
    render(<App />);

    expect(screen.getByText(/Angular/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByDisplayValue(/Angular/)).toBeNull();
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument();
  });
});
