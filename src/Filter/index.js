import React from 'react';
import ClassNames from 'classnames';
import './Filter.css';

const Filter = ({currentFilter, setFilter, filtersDef}) => {
  const isActive = filter =>
    ClassNames({
      active: currentFilter === filter,
    });
  return (
    <ul className="todo-filter">
      <li
        className={isActive(filtersDef.SHOW_ALL)}
        onClick={() => setFilter(filtersDef.SHOW_ALL)}>
        すべて
      </li>
      <li
        className={isActive(filtersDef.SHOW_ACTIVE)}
        onClick={() => setFilter(filtersDef.SHOW_ACTIVE)}>
        未完了
      </li>
      <li
        className={isActive(filtersDef.SHOW_COMPLETED)}
        onClick={() => setFilter(filtersDef.SHOW_COMPLETED)}>
        完了
      </li>
    </ul>
  );
};

export default Filter;
