import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css'

import { Provider } from 'react-redux';
import App from './components/app';
import { configStore } from './store';

const store = configStore();

const Root = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

ReactDom.render(
  (
    <Root/>
  ),
  document.querySelector('#root')
);
