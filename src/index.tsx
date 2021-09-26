import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css'
// import Test from './components/test';
import DynamicRouter from './router';

import { Provider } from 'react-redux';
import { configStore } from './store';

const store = configStore();

const Root = () => {
  return (
    <Provider store={store}>
      <DynamicRouter />
    </Provider>
  )
}

ReactDom.render(
  (
    <Root/>
  ),
  document.querySelector('#root')
);
