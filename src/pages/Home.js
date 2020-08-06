import React, { useCallback, useEffect } from 'react';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas';
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

function Home() {
  const items = useSelector((state) => state.pizzas.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();
  const onActiveIndex = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onActive={onActiveIndex}
          items={categoriesName}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((element, index) => (
              <PizzaBlock key={element.id} {...element} />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
