import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ResortsToDelete from './ResortsToDelete';
import store from '../../store/store';

test('renders the landing page', () => {
  render(
    <Provider store={store}>
      <ResortsToDelete />
    </Provider>,
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/All Resorts/);
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();
});
