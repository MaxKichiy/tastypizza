import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
function Home(props) {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          onClick={(index) => console.log(index)}
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

export default Home;
