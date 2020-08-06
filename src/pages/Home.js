import React, { useCallback } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

const categoriesName = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home(props) {
  const items = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();

  const onActiveIndex = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onActive={onActiveIndex} items={categoriesName} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items &&
          items.map((element, index) => (
            <PizzaBlock key={element.id} {...element} />
          ))}
      </div>
    </div>
  );
}

export default Home;
