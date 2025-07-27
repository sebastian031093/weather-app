import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('calls onSearch with correct city', () => {
  const mockSearch = jest.fn();
  render(<SearchBar onSearch={mockSearch} />);

  const input = screen.getByLabelText(/enter city/i);
  fireEvent.change(input, { target: { value: 'Bogotá' } });

  const button = screen.getByRole('button', { name: /search/i });
  fireEvent.click(button);

  expect(mockSearch).toHaveBeenCalledWith('Bogotá');
});
