// import React, { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }

//   render() {
//     const list =
//       !this.props.filter || this.props.filter === 'all'
//         ? this.state.items
//         : this.state.items.filter(i => i.fruit_type === this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => (
//           <li key={index}>{item.char}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default FilteredFruitList;

// import React from 'react';

// const FilteredFruitList = props => {
//   console.log(props.items);
//   const list =
//     !props.filter || filter === 'all'
//       ? props.items
//       : props.items.filter(i => i.fruit_type === props.filter);
//   console.log(list);
//   return (
//     <ul className="fruit-list">
//       {list.map((item, index) => (
//         <li key={index}>{item.char}</li>
//       ))}
//     </ul>
//   );
// };

// export default FilteredFruitList;

import React from 'react';
import { link } from 'fs';

const FilteredFruitList = props => {
  console.log(props.filter === 'pome');
  const list =
    props.filter === 'pome'
      ? props.fruit.filter(i => i.fruit_type === 'pome')
      : props.fruit;
  console.log(list);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => (
        <li key={index}>{item.char}</li>
      ))}
    </ul>
  );
};
FilteredFruitList.defaultProps = {
  filter: null,
  fruit: ''
};
export default FilteredFruitList;
