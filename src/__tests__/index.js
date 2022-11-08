import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
// estos son test de integracion
test('home work as expected', () => {
  /* render(<App />);
  const gifLink = screen.queryAllByText('Gif-link');
  expect(gifLink).toBeVisible() */
});

test('search form could be used', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, {target: {value: 'Nemo'}})
  fireEvent.click(button)

  const title = await screen.findByText('Nemo')
  expect(title).toBeVisible()
});
