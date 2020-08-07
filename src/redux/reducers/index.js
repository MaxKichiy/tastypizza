import filterReducer from './filters';
import pizzaReducer from './pizzas';
import cartReducer from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters: filterReducer,
  pizzas: pizzaReducer,
  cart: cartReducer,
});

export default rootReducer;
