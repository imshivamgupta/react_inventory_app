import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { tagline } = props;
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  );
}
Header.propType = {
  tagline: PropTypes.string.isRequired
};

Header.defaultProps = {
  tagline: 'Sample Tagline for Store'
};
