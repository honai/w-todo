import React from 'react';
import ClassNames from 'classnames';
import './TodoList.css';

const TodoItem = ({todo, toggleTodo, deleteTodo}) => (
  <li className='todo-item'>
    <label className='check-box'>
      <i className='material-icons'>{todo.completed ? 'check_circle' : 'radio_button_unchecked'}</i>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
    </label>
    <span className='color-label' style={{backgroundColor: todo.color}}></span>
    <span className={ClassNames('todo-text', {completed: todo.completed})}>{todo.text}</span>
    {todo.date ? <><i className='material-icons deadline-icon'>calendar_today</i><span className='deadline-date'>{todo.date}</span></>: false}
    {todo.completed ? <i className='material-icons delete-icon' onClick={() => deleteTodo(todo.id)}>delete</i> : false}
  </li>
);

const TodoList = ({visibleTodos, toggleTodo, deleteTodo}) => {
  return (
    <ul className='todo-list'>
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;