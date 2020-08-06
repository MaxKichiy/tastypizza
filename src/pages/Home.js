import React, { useCallback } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { connect } from 'react-redux';

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
  const onActiveIndex = useCallback((index) => {
    props.onSetCategory(index);
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onActive={onActiveIndex} items={categoriesName} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {props.items &&
          props.items.map((element, index) => (
            <PizzaBlock key={element.id} {...element} />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCategory: (index) => dispatch(setCategory(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
