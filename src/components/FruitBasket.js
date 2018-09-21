// import React, { Component }  from 'react';

// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

// export default FruitBasket;

import React from 'react';

const FruitBasket = () => {
  return <div className="fruit-basket" />;
};
FruitBasket.defaultProps = {
  filters: '',
  fruit: '',
  currentFilter: '',
  updateFilterCallback: ''
};
export default FruitBasket;
