import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('calls onSearch with correct city', () => {
  const mockSearch = jest.fn(); // 1. Simulamos una función
  render(<SearchBar onSearch={mockSearch} />); // 2. Renderizamos el componente con el mock como prop

  const input = screen.getByLabelText(/enter city/i); // 3. Buscamos el input por su etiqueta
  fireEvent.change(input, { target: { value: 'Bogotá' } }); //  4. Simulamos escribir en el input

  const button = screen.getByRole('button', { name: /search/i }); // 5. Buscamos el botón por su rol
  fireEvent.click(button); // 🔹 6. Simulamos hacer clic en el botón

  expect(mockSearch).toHaveBeenCalledWith('Bogotá'); // 7. Verificamos que se llamó la función con "Bogotá"
});
