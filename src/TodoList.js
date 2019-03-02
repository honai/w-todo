import React from 'react';
import ClassNames from 'classnames';
import './TodoList.css';

const TodoItem = ({id, todo, toggleTodo, editTodo}) => (
  <li className='todo-item'>
    <label className='check-box'>
      <i className='material-icons'>{todo.completed ? 'check_circle' : 'radio_button_unchecked'}</i>
      <input type='checkbox' checked={todo.completed} onChange={toggleTodo} />
    </label>
    <input
      className={ClassNames('todo-text', {completed: todo.completed})}
      value={todo.text}
      onChange={(e)=>editTodo(id, e.target.value)}
    />
    {todo.date ? <><i className='material-icons'>calendar_today</i><span>{todo.date}</span></>: false}
  </li>
);

const TodoList = ({visibleTodoIds, todos, toggleTodo, editTodo}) => {
  return (
    <ul className='todo-list'>
      {visibleTodoIds.map((id) => (
        <TodoItem key={id} id={id} todo={todos[id]} toggleTodo={() => toggleTodo(id)} editTodo={editTodo} />
      ))}
    </ul>
  );
}

export default TodoList;