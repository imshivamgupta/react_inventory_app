import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../helpers';

export default function Fish(props) {
  const { image, name, desc, status, price } = props.details;
  const isAvailable = status === 'available';
  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => props.addToOrder(props.index)}
      >
        {isAvailable ? 'Add To Order' : 'Sold Out!'}
      </button>
    </li>
  );
}

Fish.propType = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  })
};
