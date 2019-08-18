import React, { Component } from 'react';
import { connect } from 'react-redux'

import { RootState } from '../../store';
import { ITodo } from '../../types';
import './footer.css';

interface IFooterProps {
  todoList:ITodo[];
}

class Footer extends Component<IFooterProps, {}> {
  render() {
    return (
      <div className={'footer-container'}>
        <h3>
          总任务/已完成:{this.props.todoList.length}/{this.props.todoList.filter(todo => todo.done === true).length}
        </h3>
      </div>
    )
  }
}

const mapStateToProps = (state:RootState) => ({
  todoList: state.todoList
})

export default connect(
  mapStateToProps,
  {}
)(Footer);
