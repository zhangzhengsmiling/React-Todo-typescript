import React, { Component } from 'react';
import { Row, Card } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import List from '../list';
import Footer from '../footer';
import './app.css';

const Todo = () => {
  return (
    <div className="inner-box">
      <Row>
        <Card title={<Header/>}>
          <List />
        </Card>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Route path="/todo" component={Todo} />
        </Router>
      </div>
    )
  }
}
