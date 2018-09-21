//import React from 'react';
// const App = () => <FruitBasket />;
// export default App;

import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

export default class App extends Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  };
  render() {
    return <div />;
  }
}
