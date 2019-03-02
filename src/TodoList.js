import React from 'react';
import ClassNames from 'classnames';
import './TodoList.css';

const TodoItem = ({id, todo, toggleTodo}) => (
  <li className='todo-item'>
    <label className='check-box'>
      <i className='material-icons'>{todo.completed ? 'check_circle' : 'radio_button_unchecked'}</i>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(id)} />
    </label>
    <span className={ClassNames('todo-text', {completed: todo.completed})}>{todo.text}</span>
    {todo.date ? <><i className='material-icons deadline-icon'>calendar_today</i><span className='deadline-date'>{todo.date}</span></>: false}
  </li>
);

const TodoList = ({visibleTodoIds, todos, toggleTodo}) => {
  return (
    <ul className='todo-list'>
      {visibleTodoIds.map((id) => (
        <TodoItem key={id} id={id} todo={todos[id]} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;