import React, { useState } from 'react';

const Categories = React.memo(function Categories(props) {
  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => props.onActive(null)}
          className={props.activeCategory === null ? 'active' : ''}
        >
          Все
        </li>
        {props.items &&
          props.items.map((element, index) => (
            <li
              className={props.activeCategory === index ? 'active' : ''}
              onClick={() => props.onActive(index)}
              key={`${element}_${index}`}
            >
              {element}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
