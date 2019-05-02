import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList';
import Filter from '../Filter';
import AddTodoForm from '../AddTodoForm';
import SampleTodos from './SampleTodos';

const App = () => {
  // Todoのストア
  const initialTodos = () => {
    const version = localStorage.getItem('version') || 0
    const oldData = JSON.parse(localStorage.getItem('todos'))
    let data = []
    if (version === 0) {
      localStorage.setItem('version', '0.1')
      data = Object.keys(oldData).map(id => (
        { ...oldData[id], id: id }
      ))
    } else {
      data = oldData
    }
    if (data === null || typeof data === 'undefined') {
      return SampleTodos
    }
    return data.length === 0 ? SampleTodos : data
  }
  const [todos, setTodos] = useState(initialTodos())
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos.length)
  }, [todos.length]);
  const filtersDef = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  }
  const [filter, setFilter] = useState(filtersDef.SHOW_ALL);

  function addTodo(text, date, color) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        date: date,
        color: color,
        completed: false,
      }
    ]);
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    }));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function getVisibleTodos(todos, filter) {
    switch (filter) {
      case filtersDef.SHOW_ALL:
        return todos

      case filtersDef.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)

      case filtersDef.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  }

  return (
    <div className='app'>
      <h2 className='title'>やることリスト</h2>
      <AddTodoForm addTodo={addTodo} />
      <Filter currentFilter={filter} setFilter={setFilter} filtersDef={filtersDef} />
      <TodoList visibleTodos={getVisibleTodos(todos, filter)} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;