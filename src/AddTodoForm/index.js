import React, {useState} from 'react';
import ClassNames from 'classnames';
import './AddTodoForm.css';
import Colors from './Colors';

const AddTodoForm = ({addTodo}) => {
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoDate, setNewTodoDate] = useState('');
  const [newTodoColor, setNewTodoColor] = useState(Colors[0]);
  function handleAddTodo(e) {
    e.preventDefault();
    const trimmedText = newTodoText.trim();
    if (!trimmedText.length) {
      return;
    }
    addTodo(trimmedText, newTodoDate, newTodoColor);
    setNewTodoText('');
    setNewTodoDate('');
    setNewTodoColor(Colors[0]);
  }

  return (
    <form className="addtodo-form" onSubmit={handleAddTodo}>
      <div className="text-button-group">
        <input
          required
          className="addtodo-text"
          placeholder="タスクを入力"
          autoComplete="off"
          value={newTodoText}
          onChange={e => setNewTodoText(e.target.value)}
        />
        <button
          disabled={!newTodoText.length}
          className="add-button"
          type="submit">
          追加
        </button>
      </div>
      <div className="other-group">
        <div className="deadline-group">
          <span>期限:</span>
          <input
            type="date"
            className="addtodo-date"
            value={newTodoDate}
            onChange={e => setNewTodoDate(e.target.value)}
          />
        </div>
        <div className="color-group">
          <span>色:</span>
          <span className="color-picker">
            {Colors.map((color, index) => (
              <label
                key={index}
                className={ClassNames('item', {
                  checked: newTodoColor === color,
                })}
                style={{backgroundColor: color}}>
                <input
                  type="radio"
                  name="color"
                  value={color}
                  onChange={() => setNewTodoColor(color)}
                />
              </label>
            ))}
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
