import React, { useState } from 'react';
import './AddTodoForm.css'

const AddTodoForm = ({addTodo}) => {
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoDate, setNewTodoDate] = useState('');
  function handleAddTodo(e) {
    e.preventDefault();
    const trimmedText = newTodoText.trim();
    if (!trimmedText.length) {
      return;
    }
    addTodo(trimmedText, newTodoDate);
    setNewTodoText('');
  }

  return (
    <form className='todo-form' onSubmit={handleAddTodo}>
      <input required className='todo-input' placeholder='タスクの追加' autoComplete='off'
        value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
      <input type='date' value={newTodoDate} onChange={(e) => setNewTodoDate(e.target.value)} />
      <button disabled={!newTodoText.length} className='add-button' type='submit'>追加</button>
    </form>
  );
}

export default AddTodoForm;