import React, { Component } from 'react';
import { Row, Card } from 'antd';

import Header from '../header';
import List from '../list';
import Footer from '../footer';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className={"app-container"}>
        <div className="inner-box">
            <Row>
              <Card title={<Header/>}>
                <List></List>
              </Card>
            </Row>
            <Row>
              <Footer />
            </Row>
        </div>
      </div>
    )
  }
}
