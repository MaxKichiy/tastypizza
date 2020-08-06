import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { connect } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

function Home(props) {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          onActiveIndex={(index) => props.onSetCategory(index)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {props.items.map((element, index) => (
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
