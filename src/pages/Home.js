import React, { useCallback, useEffect } from 'react';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';

const categoriesName = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);
  const onActiveIndex = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSort = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onActive={onActiveIndex}
          items={categoriesName}
        />
        <SortPopup
          onClickSortPopup={onSelectSort}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((element, index) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={element.id}
                addedCount={
                  cartItems[element.id] && cartItems[element.id].items.length
                }
                {...element}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
