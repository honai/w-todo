import React from 'react';
import ClassNames from 'classnames';
import './TodoList.css';

const TodoItem = ({todo, toggleTodo}) => (
  <li className='todo-item'>
    <label className='check-box'>
      <i className='material-icons'>{todo.completed ? 'check_circle' : 'radio_button_unchecked'}</i>
      <input type='checkbox' checked={todo.completed} onChange={toggleTodo} />
    </label>
    <span className={ClassNames('todo-text', {completed: todo.completed})}>{todo.text}</span>
  </li>
);

const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
}

export default TodoList;