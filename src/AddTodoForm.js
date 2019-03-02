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
    <form className='addtodo-form' onSubmit={handleAddTodo}>
      <div className='text-button-group'>
        <input required className='addtodo-text' placeholder='タスクの追加' autoComplete='off'
          value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <button disabled={!newTodoText.length} className='add-button' type='submit'>追加</button>
      </div>
      <div className='deadline-group'>
        <span className='deadline-label'>期限:</span>
        <input type='date' className='addtodo-date' value={newTodoDate} onChange={(e) => setNewTodoDate(e.target.value)} />
      </div>
    </form>
  );
}

export default AddTodoForm;