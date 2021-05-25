import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { title = 'Replace Me' } = props;
  return (
    <div className="flex">
      <div>back</div>
      <div>{title}</div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
