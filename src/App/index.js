import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList';
import Filter from '../Filter';
import AddTodoForm from '../AddTodoForm';
import SampleTodos from './SampleTodos';

const App = () => {
  // Todoのストア
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(savedTodos || SampleTodos);
  // TodoのIDを管理
  const [nextTodoId, setNextTodoId] = useState(Math.max(...Object.keys(todos)) + 1 || 0);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });
  const filtersDef = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  }
  const [filter, setFilter] = useState(filtersDef.SHOW_ALL);

  function addTodo(text, date, color) {
    setTodos({
        ...todos,
        [nextTodoId]: {
          text: text,
          date: date,
          color: color,
          completed: false,
        }
    });
    setNextTodoId(nextTodoId + 1);
  }

  function toggleTodo(id) {
    setTodos({
      ...todos,
      [id]: {
        ...todos[id],
        completed: !todos[id].completed
      }
    });
  }

  function deleteTodo(id) {
    const afterDeleted = {...todos};
    delete afterDeleted[id];
    setTodos(afterDeleted)
  }

  function getVisibleTodoIds(todos, filter) {
    const ids = Object.keys(todos);
    switch (filter) {
      case filtersDef.SHOW_ALL: 
        return ids;

      case filtersDef.SHOW_COMPLETED:
        return ids.filter(id => todos[id].completed);

      case filtersDef.SHOW_ACTIVE:
        return ids.filter(id => !todos[id].completed);

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  }

  return (
    <div className='app'>
      <h2 className='title'>やることリスト</h2>
      <AddTodoForm addTodo={addTodo} />
      <Filter currentFilter={filter} setFilter={setFilter} filtersDef={filtersDef} />
      <TodoList visibleTodoIds={getVisibleTodoIds(todos, filter)} todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;