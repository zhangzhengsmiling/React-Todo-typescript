import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css'
// import Test from './components/test';
import DynamicRouter from './router';

import { Provider } from 'react-redux';
import { configStore } from './store';
import { Provider as MobxProvider } from 'mobx-react';
import StateUser from '@/pages/B/mobx';

const store = configStore();

const Root = () => {
  return (
    <MobxProvider store={new StateUser()}>
      <Provider store={store}>
        <DynamicRouter />
      </Provider>
    </MobxProvider>
  )
}

ReactDom.render(
  (
    <Root/>
  ),
  document.querySelector('#root')
);
