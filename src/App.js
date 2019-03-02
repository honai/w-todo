import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Filter from './Filter'

const App = () => {
  // Todoのストア
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(savedTodos || []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });
  // TodoのIDを管理
  const lastTodoItem = todos.slice(-1)[0];
  const [nextTodoId, setNextTodoId] = useState(lastTodoItem ? lastTodoItem.id + 1 : 0);
  const filtersDef = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  }
  const [filter, setFilter] = useState(filtersDef.SHOW_ALL);

  // 追加しようとしているTodoを保持
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodoChange(e) {
    setNewTodo(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed.length) {
      return;
    }
    setTodos([...todos, {
      id: nextTodoId,
      text: newTodo,
      completed: false,
    }]);
    setNewTodo('');
    setNextTodoId(nextTodoId + 1);
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )));
  }

  function getVisibleTodos(todos, filter) {
    switch (filter) {
      case filtersDef.SHOW_ALL: 
        return todos;

      case filtersDef.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);

      case filtersDef.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);

      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input id='new-todo' value={newTodo} onChange={handleNewTodoChange} />
        <button type='submit'>Todo追加</button>
      </form>
      <TodoList todos={getVisibleTodos(todos, filter)} toggleTodo={toggleTodo} />
      <Filter currentFilter={filter} setFilter={setFilter} filtersDef={filtersDef} />
    </>
  );
}

export default App;