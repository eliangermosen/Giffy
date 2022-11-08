import { render, screen } from '@testing-library/react';
import App from './App';
// test para rutas asincronas
test('renders without crashing', async () => {
  render(<App />);
  const title = await screen.findByText(/Ultima Busqueda/i);
  // espero que el elemento title este en el documento
  expect(title).toBeInTheDocument();
});
