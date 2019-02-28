import React from 'react';

const TodoItem = ({todo, toggleTodo}) => (
  <li>
    <label>
      <input type='checkbox' checked={todo.completed} onChange={toggleTodo} />{todo.text}
    </label>
  </li>
);

const TodoList = ({todos, toggleTodo}) => {
  return todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} toggleTodo={() => toggleTodo(todo.id)} />
  ));
}

export default TodoList;