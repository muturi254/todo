import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class Todos extends Component{
    Complete = (id) => {
        console.log(id);
        
    }
    render() {
        return this.props.todos.map((todo) => (
            // <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
            <TodoItem todo={todo} key={todo.id} Complete={this.props.Complete(id)} delTodo={this.props.delTodo} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;