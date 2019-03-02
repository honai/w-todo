import React, { useState } from 'react';

const AddTodoForm = ({addTodo}) => {
  const [newTodoText, setNewTodoText] = useState('');
  function handleAddTodo(e) {
    e.preventDefault();
    const trimmedText = newTodoText.trim();
    if (!trimmedText.length) {
      return;
    }
    addTodo(trimmedText);
    setNewTodoText('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input id='new-todo' autoComplete='off' value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
      <button type='submit'>Todo追加</button>
    </form>
  );
}

export default AddTodoForm;