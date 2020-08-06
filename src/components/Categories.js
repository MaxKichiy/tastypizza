import React, { useState } from 'react';

const Categories = React.memo(function Categories(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickActive = (index) => {
    setActiveIndex(index);
    props.onActive(index);
  };
  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => onClickActive(null)}
          className={activeIndex === null ? 'active' : ''}
        >
          Все
        </li>
        {props.items &&
          props.items.map((element, index) => (
            <li
              className={activeIndex === index ? 'active' : ''}
              onClick={() => onClickActive(index)}
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
