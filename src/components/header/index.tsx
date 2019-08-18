import React, { Component, KeyboardEvent, ChangeEvent } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { connect } from 'react-redux';

import { RootState } from '../../store';
import { addTodoAction } from '../../store/actions';
import { ITodo } from '../../types';

interface IHeaderProps {
  todoList:ITodo[];
  addTodoAction: typeof addTodoAction
}

interface IHeaderState {
  todoText:string;
}

class Header extends Component<IHeaderProps, IHeaderState> {
  state = {
    todoText: ''
  }

  handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({ todoText: value });
  }

  handleAdd = () => {
    const { todoText } = this.state;
    if(todoText.trim() === '') {
      return;
    }
    this.props.addTodoAction({
      content: todoText,
      done: false
    });
    this.setState({ todoText: '' })
  }

  handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13) {
      console.log(e.keyCode);
      this.handleAdd();
    }
  }

  render() {
    return (
      <Row>
        <Col span={16}>
          <Input placeholder="please input todo：" value={this.state.todoText} onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleKeyDown(e)}></Input>
        </Col>
        <Col span={8}>
          <Button disabled={this.state.todoText.trim() === ''} type={'primary'} style={{ marginLeft: '50%', transform: 'translateX(-50%)' }} onClick={() => this.handleAdd()}>添加</Button>
        </Col>
      </Row>
    )
  }
}

const mapStaateToProps = (state:RootState) => ({
  todoList: state.todoList
})

export default connect(
  mapStaateToProps,
  {
    addTodoAction
  }
)(Header);
