import React, { useEffect } from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import axios from 'axios';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    axios
      .get('http://localhost:3001/pizzas')
      .then((res) => props.setPizzas(res.data));
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

const mapDispatchToProp = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(null, mapDispatchToProp)(App);
