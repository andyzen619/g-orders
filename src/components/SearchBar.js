import React, { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-len
const onSearchInputChange = ({ event, setSearchInputState }) => setSearchInputState(event.target.value);

function SearchBar(props) {
  const { input = 'Replace Me' } = props;
  const [searchInputState, setSearchInputState] = useState(input);

  return (
    <input
      className="bg-gray-200 flex flex-col justify-center h-12 m-4 p-4"
      type="text"
      value={searchInputState}
      onChange={(event) => { onSearchInputChange({ event, setSearchInputState }); }}
    />
  );
}

SearchBar.propTypes = {
  input: PropTypes.string.isRequired,
};

export default SearchBar;
