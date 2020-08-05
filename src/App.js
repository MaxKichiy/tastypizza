import React, { useState } from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then((res) => setPizzas(res.data.pizzas));
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' render={() => <Home items={pizzas} />} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
