
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/app';
import Test from '../components/test';

const DynamicRouter = () => {
  return (
    <Router>
      <Route path="/app" component={App} />
      <Route path="/test" component={Test} />
    </Router>
  )
}

export default DynamicRouter;
