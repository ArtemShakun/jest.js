import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './Search';

const onChange = jest.fn();

describe('Search component', () => {
  test('renders Search component', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>,
    );

    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  test('render without children', () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  test('render without placeholder', () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText('search....')).toBeInTheDocument();
  });

  test('render custom placeholder', () => {
    render(<Search value="" onChange={onChange} placeholder="test" />);

    expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
  });

  test('onChange works', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>,
    );
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  test('dynamic style works', () => {
    render(<Search value="abc" onChange={onChange} />);

    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText('Search')).toHaveClass('label');
  });
});
