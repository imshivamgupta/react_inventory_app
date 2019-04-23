import React from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';
const StorePicker = props => {
  // Creating the Ref
  const inputValue = React.createRef();
  // Handling the Form
  const goToStore = e => {
    e.preventDefault();
    // Extracting the value
    const url = inputValue.current.value;
    props.history.push(`/store/${url}`);
  };

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input type="text" ref={inputValue} defaultValue={getFunName()} />
      <button type="submit">Visit Store →</button>
    </form>
  );
};

StorePicker.propType = {
  history: PropTypes.object.isRequired
};
export default StorePicker;
