import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Checkbox, Button, Empty, message } from 'antd';

import { RootState } from '../../store';
import { ITodo } from '../../types';
import { deleteTodoAction, changeTodoStatusAction } from '../../store/actions';

interface IListProp {
  todoList:ITodo[];
  deleteTodoAction: typeof deleteTodoAction;
  changeTodoStatusAction:typeof changeTodoStatusAction;
}

class List extends Component<IListProp> {

  handleChange = (index:number) =>  {
    this.props.changeTodoStatusAction(index);
  }

  handleDelete = async (index:number) => {
    await this.props.deleteTodoAction(index);
    message.success("删除成功", 0.5);
  }

  render() {
    const { todoList } = this.props;
    return (
      <div>
      {
        todoList.length ? (
          <div>
            {
              todoList.map((todo, index) => (
               <Row key={index}>
                 <label>
                    <Col span={1}>
                      <Checkbox checked={todo.done} onChange={() => { this.handleChange(index) }}></Checkbox>
                    </Col>
                    <Col span={20}>
                      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                        {
                          todo.content
                        }
                      </span>
                    </Col>
                    <Col span={3} style={{marginTop: '10px'}}>
                      <Button type={'danger'} size={'small'} onClick={() => {this.handleDelete(index)}}>删除</Button>
                    </Col>
                 </label>
               </Row>
              ))
            }
          </div>
        )
        :
        (<Empty/>)
      }
      </div>
    )
  }
}

const mapStateToProps = (state:RootState) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch:any) => ({
  deleteTodoAction: (index:number) => dispatch(deleteTodoAction(index)),
  changeTodoStatusAction: (index:number) => dispatch(changeTodoStatusAction(index)),  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
