import React from 'react';

const Filter = ({currentFilter, setFilter, filtersDef}) => {
  return (
    <div>
      <label>
        <input type='radio' name='filter'
          checked={currentFilter === filtersDef.SHOW_ALL}
          onChange={() => setFilter(filtersDef.SHOW_ALL)}
        />全て
      </label>
      <label>
        <input type='radio' name='filter'
          checked={currentFilter === filtersDef.SHOW_ACTIVE}
          onChange={() => setFilter(filtersDef.SHOW_ACTIVE)}
        />未完了
      </label>
      <label>
        <input type='radio' name='filter'
          checked={currentFilter === filtersDef.SHOW_COMPLETED}
          onChange={() => setFilter(filtersDef.SHOW_COMPLETED)}
        />完了
      </label>
    </div>
  );
}

export default Filter;