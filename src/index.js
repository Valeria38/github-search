import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'features/App';

import store from 'store';

import 'normalize.css';
import './styles.scss';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

/* eslint-disable no-undef */
ReactDOM.render(<Root />, document.querySelector('#root'));
