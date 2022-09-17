import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('layout works', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const svgImg = container.querySelector('#bigBuyLogo');
  const mainContainer = container.querySelector('.workers__container');

  expect(svgImg).toBeInTheDocument();
  expect(mainContainer).toBeInTheDocument();
});
